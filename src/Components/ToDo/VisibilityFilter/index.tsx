import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import { useStyles } from './styles';

import { AppState } from '../SagaStore/store';
import { Actions } from '../SagaStore/todoTypes';
import { requestApplyFilter } from '../SagaStore/todoActions';

const VisibilityFilter: React.FC<any> = () => {
  const classes = useStyles();

  const dispatch = useDispatch<Dispatch<Actions>>();

  const filter = useSelector<AppState, any>(state => state.filter)

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color={(filter === 'ALL' && 'primary') || 'default'}
        onClick={() => dispatch(requestApplyFilter('ALL'))}
      >
        All
      </Button>
      <Button
        variant="contained"
        color={(filter === 'ACTIVE' && 'primary') || 'default'}
        onClick={() => dispatch(requestApplyFilter('ACTIVE'))}
      >
        Active
      </Button>
      <Button
        variant="contained"
        color={(filter === 'INACTIVE' && 'primary') || 'default'}
        onClick={() => dispatch(requestApplyFilter('INACTIVE'))}
      >
        Inactive
      </Button>
    </div>
  );
}

export default VisibilityFilter;
