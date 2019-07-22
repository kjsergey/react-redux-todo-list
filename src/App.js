import React from 'react';
import './App.css';
import TasksContainer from './containers/TasksContainer'

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>
      </div>
      <TasksContainer />
    </div>
  );
}

export default App;
