import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm'

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>
      </div>
      <LoginForm />
    </div>
  );
}

export default App;
