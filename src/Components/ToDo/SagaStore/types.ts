import * as constants from './constants';

export interface Todo {
    id: string
    active: boolean,
    title: string,
    description: string,
    enableEdit: boolean,
}

export interface State {
    todos: Array<Todo>
}

export interface Add {
    type: constants.ADD
    todo: Todo
}

export interface Edit {
    type: constants.EDIT
    id: string
}

export interface Commit {
    type: constants.COMMIT
    todo: Todo
}


export interface Remove {
    type: constants.REMOVE
    id: string
}

export interface Toggle {
    type: constants.TOGGLE
    id: string
}

export interface Reset {
    type: constants.RESET
}

export type Actions = Add | Edit | Commit | Remove | Toggle | Reset
