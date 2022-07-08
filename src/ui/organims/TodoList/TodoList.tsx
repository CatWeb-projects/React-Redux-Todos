import React from 'react';
import { useRequest } from 'estafette';
import { useSelector } from 'react-redux';
import { todos, todosProps } from '../../../libs/http/api';
import { TodoItem } from '../../molecules';

export const TodoList = () => {
  const { request, data } = useRequest<todosProps[]>();
  const todosList = useSelector((state: any) => state.todos.todos);

  React.useEffect(() => {
    onFetch();
    return () => {
      todos.get.cancel();
    };
  }, []);

  const onFetch = () => request(todos.get.action());

  React.useEffect(() => {
    if (todosList) {
      onFetch();
    }
  }, [todosList]);

  return (
    <div className="todos__wrapper">
      {data &&
        data.map((todo: todosProps) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};
