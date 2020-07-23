import React from 'react';
import { Provider } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import store from '../../Components/ToDo/SagaStore/store';

import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
// import ResetButton from './resetButton';

const ToDo = () => (
  <Provider store={store}>
    <Container maxWidth="md">
      <Typography style={{ padding: '20px' }} variant="h5">
        Todos With Redux-Saga
            </Typography>
      <AddToDo />
      <ToDoList />
      {/* <ResetButton /> */}
    </Container>
  </Provider>
)

export default ToDo;