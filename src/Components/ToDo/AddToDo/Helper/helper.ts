import uniqueId from 'lodash/uniqueId';
import { Todo } from '../../SagaStore/types';

export const createTodo = (prefix: string, title: string, description: string, enableEdit: boolean): Todo => ({
  id: uniqueId(prefix),
  active: true,
  title,
  description,
  enableEdit
});

export const editTodo = (prefix: string, active: boolean, title: string, description: string): Todo => ({
  id: prefix,
  active,
  title,
  description,
  enableEdit: false
})
