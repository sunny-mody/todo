import * as constants from './todoConstants';
import { Todo } from './types';


// export interface Todo {
//   id: string
//   active: boolean,
//   title: string
// }

export interface State {
  todos: Array<Todo>
}

export interface RequestToAdd {
  type: constants.REQUEST_TO_ADD
  todo: Todo
}

export interface RequestToEdit {
  type: constants.REQUEST_TO_EDIT
  id: string
}

export interface RequestCommitEdit {
  type: constants.REQUEST_COMMIT_EDIT
  todo: Todo
}

export interface RequestToRemove {
  type: constants.REQUEST_TO_REMOVE
  id: string
}

export interface RequestToToggle {
  type: constants.REQUEST_TO_TOGGLE
  id: string
}

export interface RequestToReset {
  type: constants.REQUEST_TO_RESET
}

export type Actions = RequestToAdd | RequestToEdit | RequestCommitEdit | RequestToRemove | RequestToToggle | RequestToReset
