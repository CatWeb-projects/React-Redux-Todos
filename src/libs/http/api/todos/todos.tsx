import axios, { Canceler } from 'axios';
import { todosProps } from './todos.types';

export const todos = {
  get: {
    action: (): Promise<{ data: todosProps[] }> =>
      axios.get('http://localhost:3005/todos'),
    cancel: (() => null) as Canceler
  },
  delete: {
    action: (id: string | number): Promise<{ data: todosProps[] }> =>
      axios.delete(`http://localhost:3005/todos/${id}`),
    cancel: (() => null) as Canceler
  },
  toggle: {
    action: (id: string | number): Promise<{ data: todosProps[] }> =>
      axios.patch(`http://localhost:3005/todos/${id}`, {}),
    cancel: (() => null) as Canceler
  }
};
