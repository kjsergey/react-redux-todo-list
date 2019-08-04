import React from 'react';
import PropTypes from 'prop-types';
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

Todos.propTypes = {
  match: PropTypes.object
};

export default Todos;
