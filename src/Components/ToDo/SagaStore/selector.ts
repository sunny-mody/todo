import * as VISIBILITY_FILTERS from './todoConstants';
import { AppState } from '../SagaStore/store';

export const getToDoByFilter = (state: AppState, filter: string) => {
  const allTodos = state.todos;
  switch (filter) {
    case VISIBILITY_FILTERS.ACTIVE:
      return allTodos.filter(todo => todo.active)
    case VISIBILITY_FILTERS.INACTIVE:
      return allTodos.filter(todo => !todo.active)
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos
  }
};


