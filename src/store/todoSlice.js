// src/store/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, description: 'Call doctor', deadline: '2024-06-20T10:00' },
    { id: 2, description: 'Clean the house', deadline: '2024-06-21T14:00' },
    { id: 3, description: 'Pay bills', deadline: '2024-06-22T16:00' },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;