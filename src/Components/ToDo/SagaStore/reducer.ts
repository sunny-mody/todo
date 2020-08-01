import { State, Actions } from './todoTypes';
import { REQUEST_TO_ADD, REQUEST_TO_EDIT, REQUEST_APPLY_FILTER, REQUEST_COMMIT_EDIT, REQUEST_TO_REMOVE, REQUEST_TO_TOGGLE, REQUEST_TO_RESET } from './todoConstants';

// import { ADD, REMOVE, TOGGLE, RESET } from './constants';

export const initialState: State = {
  todos: [],
  filter: 'All'
}

export const reducer = (state = initialState, action: Actions): State => {
  debugger;
  switch (action.type) {
    case REQUEST_TO_ADD:
      return {
        filter: state.filter,
        todos: [action.todo, ...state.todos]
      }
    case REQUEST_TO_EDIT:
      return {
        filter: state.filter,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, enableEdit: !todo.enableEdit }
            : { ...todo, enableEdit: false }
        )
      }
    case REQUEST_COMMIT_EDIT:
      return {
        filter: state.filter,
        todos: state.todos.map(todo =>
          todo.id === action.todo.id
            ? {
              ...todo,
              ...action.todo,
              title: action.todo.title || todo.title,
              description: action.todo.description || todo.description
            }
            : todo
        )
      }
    case REQUEST_TO_REMOVE:
      return {
        filter: state.filter,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    case REQUEST_TO_TOGGLE:
      return {
        filter: state.filter,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, active: !todo.active }
            : todo
        )
      }
    case REQUEST_APPLY_FILTER:
      return {
        todos: [...state.todos],
        filter: action.filter,
      }
    case REQUEST_TO_RESET:
      return initialState
    default:
      return state
  }
}
