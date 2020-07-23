import { Todo } from '../../SagaStore/types';

export const createTodo = (prefix: string, title: string): Todo => ({
  id: Math.random().toString(),
  active: true,
  title
})
