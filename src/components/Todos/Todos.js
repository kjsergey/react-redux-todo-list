import React, { Fragment } from 'react';
import TodoList from '../TodoList';
import ItemAddForm from '../ItemAddForm';


const Todos = () => {
  return (
    <Fragment>
      <ItemAddForm />
      <TodoList />
    </Fragment>
  );
}

export default Todos;
