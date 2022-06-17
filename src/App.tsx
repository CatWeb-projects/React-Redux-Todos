import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';
import { TodoList } from './ui/organims';

import './styles.scss';

export const App = () => {
  const [text, setText] = React.useState<string>('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo(text));
    setText('');
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
