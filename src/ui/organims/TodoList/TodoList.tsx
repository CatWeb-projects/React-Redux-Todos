import React from 'react';
import { useRequest } from 'estafette';
import { useSelector } from 'react-redux';
import { todos, todosProps } from '../../../libs/http/api';
import { TodoItem } from '../../molecules';

export const TodoList = () => {
  const [allTodos, setAllTodos] = React.useState<todosProps[]>([]);
  const { request, data } = useRequest<todosProps[]>({ data: [] });
  const todosList = useSelector((state: any) => state.todos.todos);

  React.useEffect(() => {
    // request(axios.get('http://localhost:3005/todos'));
    onFetch();
    return () => {
      todos.cancel();
    };
  }, []);

  const onFetch = () => request(todos.action());

  React.useEffect(() => {
    if (data) {
      setAllTodos([...data, ...todosList]);
    }
  }, [data, todosList]);

  return (
    <div className="todos__wrapper">
      {allTodos &&
        allTodos.map((todo: todosProps) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
  );
};
