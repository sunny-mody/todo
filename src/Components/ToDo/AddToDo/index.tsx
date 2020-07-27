import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

// import styles
import { useStyles } from './styles';

// Material import
import { TextField, Grid, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

// saga imports
import { createTodo, editTodo } from '../AddToDo/Helper/helper';
import { requestToAdd, requestCommitEdit } from '../SagaStore/todoActions';
import { Actions } from '../SagaStore/todoTypes';
import { Todo } from '../SagaStore/types';
import { AppState } from '../SagaStore/store';

const Form: React.FC<any> = () => {
  const classes = useStyles();
  // ToDo's enabled for editing
  const editEnabledTodo = useSelector<AppState, Array<Todo>>(state => state.todos.filter(todo => todo.enableEdit));

  const dispatch = useDispatch<Dispatch<Actions>>()

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const isEditRequested = (editEnabledTodo && editEnabledTodo.length > 0) || '';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let todo;
    if (isEditRequested) {
      const { id, active } = editEnabledTodo[0];
      todo = editTodo(id, active, title, description);
      dispatch(requestCommitEdit(todo));
    } else {
      todo = createTodo('saga_todo_', title, description, false);
      dispatch(requestToAdd(todo));
    }

    setTitle('');
    setDescription('');
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
      <Grid container>
        <Grid item xs={6}>
          <TextField
            name="todo"
            label="Add title"
            value={title || (isEditRequested && editEnabledTodo[0].title)}
            onChange={e => setTitle(e.target.value)}
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="description"
            label="Add Description"
            value={description || (isEditRequested && editEnabledTodo[0].description)}
            onChange={e => setDescription(e.target.value)}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            startIcon={<AddIcon />}
            className={classes.button}
          >
            {(isEditRequested && 'Edit') || 'Add'}
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Form;