import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { createTodo } from '../AddToDo/Helper/helper';

import { requestToAdd } from '../SagaStore/todoActions';
import { Actions } from '../SagaStore/todoTypes';

const Form: React.FC<any> = () => {

  const dispatch = useDispatch<Dispatch<Actions>>()

  const [title, setTitle] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const todo = createTodo('saga_todo_', title)

    dispatch(requestToAdd(todo))
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        name="todo"
        label="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
        margin="normal"
        fullWidth
        required
        InputProps={{
          endAdornment: <InputAdornment position="end">
            <IconButton
              type="submit"
              color="primary"
              size="small"
            >
              <AddIcon />
            </IconButton>
          </InputAdornment>,
        }}
      />
    </form>
  )
}

export default Form;