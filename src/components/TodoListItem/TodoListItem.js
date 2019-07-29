import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({id, name, onDelete}) => {
  return (
    <span>
      <span
        className="todo-list-item-label"
      >{name}</span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right" >
        <i className="fa fa-exclamation"></i>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDelete}>
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  );
}

export default TodoListItem;
