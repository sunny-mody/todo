import { State, Actions } from './todoTypes';
import { REQUEST_TO_ADD, REQUEST_TO_REMOVE, REQUEST_TO_TOGGLE, REQUEST_TO_RESET } from './todoConstants';

// import { ADD, REMOVE, TOGGLE, RESET } from './constants';

export const initialState: State = {
    todos: []
}

export const reducer = (state = initialState, action: Actions): State => {
    switch(action.type){
        case REQUEST_TO_ADD:
            return {
                todos: [action.todo, ...state.todos]
            }
        case REQUEST_TO_REMOVE:
            return { 
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case REQUEST_TO_TOGGLE:
            return { 
                todos: state.todos.map(todo => 
                    todo.id === action.id 
                    ? {...todo, active: !todo.active} 
                    : todo 
                )
            }
        case REQUEST_TO_RESET:
            return initialState
        default:
            return state
    }
}
