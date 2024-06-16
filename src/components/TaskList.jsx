// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../store/todoSlice';
import { format } from 'date-fns';

const TaskList = () => {
  const tasks = useSelector(state => state.todo.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <div>
            <h3>{task.description}</h3>
            <p>Deadline: {format(new Date(task.deadline), 'PPpp')}</p>
          </div>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;