// src/components/Header.js
import React from 'react';

const Header = ({ toggleTaskInput }) => {
  return (
    <header>
      <h1>To-Do List</h1>
      <button onClick={toggleTaskInput}>Add New Task</button>
    </header>
  );
};

export default Header;