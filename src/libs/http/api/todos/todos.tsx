import axios, { Canceler } from 'axios';
import { todosProps } from './todos.types';

export const todos = {
  action: (): Promise<{ data: todosProps[] }> =>
    axios.get('http://localhost:3005/todos'),
  cancel: (() => null) as Canceler
};
