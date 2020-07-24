import React from 'react';
import { useStyles } from './styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
// import ResetButton from './resetButton';

const ToDo = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Typography className={classes.root} variant="h5">
        Todos With Redux-Saga
        </Typography>
      <AddToDo />
      <ToDoList />
      {/* <ResetButton /> */}
    </Container>
  )
}

export default ToDo;