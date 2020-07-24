import { State, Actions } from './todoTypes';
import { REQUEST_TO_ADD, REQUEST_TO_EDIT, REQUEST_COMMIT_EDIT, REQUEST_TO_REMOVE, REQUEST_TO_TOGGLE, REQUEST_TO_RESET } from './todoConstants';

// import { ADD, REMOVE, TOGGLE, RESET } from './constants';

export const initialState: State = {
  todos: []
}

export const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case REQUEST_TO_ADD:
      return {
        todos: [action.todo, ...state.todos]
      }
    case REQUEST_TO_EDIT:
      return {
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, enableEdit: !todo.enableEdit }
            : { ...todo, enableEdit: false }
        )
      }
    case REQUEST_COMMIT_EDIT:
      return {
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
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    case REQUEST_TO_TOGGLE:
      return {
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, active: !todo.active }
            : todo
        )
      }
    case REQUEST_TO_RESET:
      return initialState
    default:
      return state
  }
}
