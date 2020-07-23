import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { createTodo } from '../AddToDo/Helper/helper';

import { requestToAdd } from '../SagaStore/todoActions';
import { Actions } from '../SagaStore/todoTypes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '25ch',
      },
    },
    button: {
      margin: 20
    },
  }),
);

const Form: React.FC<any> = () => {
  const classes = useStyles();
  const dispatch = useDispatch<Dispatch<Actions>>()

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const todo = createTodo('saga_todo_', title, description)

    dispatch(requestToAdd(todo))
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
            value={title}
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
            value={description}
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
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Form;