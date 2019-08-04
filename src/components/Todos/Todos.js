import React from 'react';
import TodoList from '../TodoList';
import ItemAddForm from '../ItemAddForm';
import ItemStatusFilter from '../ItemStatusFilter';

import './Todos.css';

const Todos = ({match}) => {
  return (
    <div className='todo-app'>
      <ItemStatusFilter filter={match.params.filter || 'all'}/>
      <ItemAddForm />
      <TodoList filter={match.params.filter || 'all'}/>
    </div>
  );
}

export default Todos;
