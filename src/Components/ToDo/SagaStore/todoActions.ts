import { Todo } from './types';
import { RequestToAdd, RequestToEdit, RequestApplyFilter, RequestCommitEdit, RequestToRemove, RequestToToggle, RequestToReset } from './todoTypes';
import * as constants from './todoConstants';

export const requestToAdd = (todo: Todo): RequestToAdd => ({ type: constants.REQUEST_TO_ADD, todo })
export const requestToEdit = (id: string): RequestToEdit => ({ type: constants.REQUEST_TO_EDIT, id })
export const requestCommitEdit = (todo: Todo): RequestCommitEdit => ({ type: constants.REQUEST_COMMIT_EDIT, todo })
export const requestToRemove = (id: string): RequestToRemove => ({ type: constants.REQUEST_TO_REMOVE, id })
export const requestToToggle = (id: string): RequestToToggle => ({ type: constants.REQUEST_TO_TOGGLE, id })
export const requestToReset = (): RequestToReset => ({ type: constants.REQUEST_TO_RESET })
export const requestApplyFilter = (filter: string): RequestApplyFilter => ({ type: constants.REQUEST_APPLY_FILTER, filter })
