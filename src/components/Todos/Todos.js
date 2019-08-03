import React from 'react';
import TodoList from '../TodoList';
import ItemAddForm from '../ItemAddForm';

import './Todos.css';

const Todos = () => {
  return (
    <div className='todo-app'>
      <ItemAddForm />
      <TodoList />
    </div>
  );
}

export default Todos;
