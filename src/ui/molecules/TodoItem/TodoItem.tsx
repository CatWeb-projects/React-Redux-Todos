import React from 'react';
import { useDispatch } from 'react-redux';
import { todosProps } from '../../../libs/http/api';
import { removeTodo, toggleTodo } from '../../../store/todoSlice';

interface Props {
  todo: todosProps;
}

export const TodoItem = ({ todo }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="todos__items" key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <span
        style={
          todo.completed === true ? { textDecoration: 'line-through' } : {}
        }
      >
        {todo.title}
      </span>
      <span
        onClick={() => dispatch(removeTodo(todo.id))}
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
