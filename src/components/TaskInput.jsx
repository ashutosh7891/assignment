// src/components/TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/todoSlice';

const TaskInput = ({ isVisible, toggleTaskInput }) => {
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!description || !deadline) return alert('Please fill out all fields')
    if (description && deadline) {
      dispatch(addTask({
        id: Date.now(),
        description,
        deadline,
      }));
      setDescription('');
      setDeadline('');
      toggleTaskInput();
    }
  };

  if (!isVisible) return null;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskInput;