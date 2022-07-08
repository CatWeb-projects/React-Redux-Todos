import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: action.payload,
        title: action.payload,
        completed: false
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
    }
  }
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
