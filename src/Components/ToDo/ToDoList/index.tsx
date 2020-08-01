import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
// import styles
import { useStyles } from './styles';

import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  Divider,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MaterialUIList from '@material-ui/core/List';

import { Todo } from '../SagaStore/types';

import { requestToToggle, requestToRemove, requestToEdit } from '../SagaStore/todoActions';
import { Actions } from '../SagaStore/todoTypes';
import { getToDoByFilter } from '../SagaStore/selector';

import { AppState } from '../SagaStore/store';

// Component import
import { ToDoIndicator } from '../ToDoIndicator';

const ToDoList: React.FC<any> = () => {
  const classes = useStyles();

  const dispatch = useDispatch<Dispatch<Actions>>();

  const filter = useSelector<AppState, any>(state => state.filter)
  debugger;
  const todos = useSelector<AppState, Array<Todo>>(state => getToDoByFilter(state, filter));

  return (
    <MaterialUIList disablePadding>
      <ToDoIndicator length={todos.length} />
      {todos.map(todo => {
        return (
          <React.Fragment>
            <ListItem
              key={todo.id}
              dense
              button
              onClick={() => dispatch(requestToToggle(todo.id))}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={!todo.active}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText className={clsx(!todo.active && classes.activeTodo)}>
                {todo.title}
              </ListItemText>
              <ListItemText>
                {todo.description}
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => dispatch(requestToEdit(todo.id))}
                  edge="end"
                  color="primary"
                  size="small"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => dispatch(requestToRemove(todo.id))}
                  edge="end"
                  color="secondary"
                  size="small"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </React.Fragment>
        )
      })}
    </MaterialUIList>
  )
}

export default ToDoList;
