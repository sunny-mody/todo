import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MaterialUIList from '@material-ui/core/List';

import { Todo } from '../SagaStore/types';

import { requestToToggle, requestToRemove } from '../SagaStore/todoActions';
import { Actions } from '../SagaStore/todoTypes';

import { AppState } from '../SagaStore/store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activeTodo: {
      textDecoration: 'line-through'
    }
  }),
);

const ToDoList: React.FC<any> = () => {
  const classes = useStyles()
  const dispatch = useDispatch<Dispatch<Actions>>()
  const todos = useSelector<AppState, Array<Todo>>(state => state.todos)

  return (
    <MaterialUIList disablePadding>
      {todos.map(todo => {
        return (
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
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => dispatch(requestToRemove(todo.id))}
                edge="end"
                color="primary"
                size="small"
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </MaterialUIList>
  )
}

export default ToDoList;