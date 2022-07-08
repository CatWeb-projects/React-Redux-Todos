import React from 'react';
import { useDispatch } from 'react-redux';
import { useRequest } from 'estafette';
import axios from 'axios';
import { todos, todosProps } from '../../../libs/http/api';
import { removeTodo, toggleTodo } from '../../../store/todoSlice';

interface Props {
  todo: todosProps;
}

export const TodoItem = ({ todo }: Props) => {
  const dispatch = useDispatch();
  const { request } = useRequest<todosProps[]>();

  const deleteTodo = (id: number | string) => {
    try {
      request(todos.delete.action(id));
      dispatch(removeTodo(id));
    } catch (e) {
      console.log(e);
    }
  };

  const toggle = (id: number | string) => {
    try {
      request(
        axios.patch(`http://localhost:3005/todos/${id}`, {
          completed: !todo.completed
        })
      );
      dispatch(toggleTodo(id));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="todos__items">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggle(todo.id)}
      />
      <span
        style={
          todo.completed === true ? { textDecoration: 'line-through' } : {}
        }
      >
        {todo.title}
      </span>
      <span
        onClick={() => deleteTodo(todo.id)}
        style={{
          color: 'red',
          marginLeft: '10px',
          cursor: 'pointer'
        }}
      >
        &times;
      </span>
    </div>
  );
};
