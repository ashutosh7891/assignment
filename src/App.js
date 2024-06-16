// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [isTaskInputVisible, setIsTaskInputVisible] = useState(false);

  const toggleTaskInput = () => {
    setIsTaskInputVisible(!isTaskInputVisible);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Header toggleTaskInput={toggleTaskInput} />
        <TaskInput isVisible={isTaskInputVisible} toggleTaskInput={toggleTaskInput} />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;