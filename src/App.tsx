import React from 'react';
import { useDispatch } from 'react-redux';
import { useRequest } from 'estafette';
import axios from 'axios';
import { addTodo } from './store/todoSlice';
import { TodoList } from './ui/organims';
import { todos, todosProps } from './libs/http/api';

import './styles.scss';

export const App = () => {
  const [text, setText] = React.useState<string>('');
  const { request, data } = useRequest<todosProps[]>();
  const dispatch = useDispatch();

  const addTask = () => {
    try {
      request(
        axios.post('http://localhost:3005/todos', {
          id: text,
          title: text,
          completed: false
        })
      );
      dispatch(addTodo(text));
      setText('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <div className="todos">
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={addTask}>Add Todo</button>
        </div>
        <TodoList />
      </div>
    </div>
  );
};
