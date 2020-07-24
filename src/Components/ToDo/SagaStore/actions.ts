import { Add, Remove, Toggle, Reset, Todo } from './types';
import * as constants from './constants';

export const add = (todo: Todo): Add => ({ type: constants.ADD, todo })
export const remove = (id: string): Remove => ({ type: constants.REMOVE, id })
export const toggle = (id: string): Toggle => ({ type: constants.TOGGLE, id })
export const reset = (): Reset => ({ type: constants.RESET })
