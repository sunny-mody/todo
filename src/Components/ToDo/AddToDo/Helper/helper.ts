import uniqueId from 'lodash/uniqueId';
import { Todo } from '../../SagaStore/types';

export const createTodo = (prefix: string, title: string, description: string): Todo => ({
  id: uniqueId(prefix),
  active: true,
  title,
  description
})
