import { Add, Edit, Commit, Remove, Filter, Toggle, Reset, Todo } from './types';
import * as constants from './constants';

export const add = (todo: Todo): Add => ({ type: constants.ADD, todo })
export const edit = (id: string): Edit => ({ type: constants.EDIT, id })
export const commit = (todo: Todo): Commit => ({ type: constants.COMMIT, todo });
export const remove = (id: string): Remove => ({ type: constants.REMOVE, id })
export const toggle = (id: string): Toggle => ({ type: constants.TOGGLE, id })
export const filer = (filter: string): Filter => ({ type: constants.FILTER, filter })
export const reset = (): Reset => ({ type: constants.RESET })
