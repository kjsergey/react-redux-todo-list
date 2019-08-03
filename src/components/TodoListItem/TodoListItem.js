import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeTask } from '../../actions/actionCreators'

import { faTrash, faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './TodoListItem.css';

const TodoListItem = ({id, name, done, important}) => {
  const dispatch = useDispatch();

  const onDelete = () =>{
    dispatch(removeTask(id));
  }

  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
      >{name}</span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right" >
        <FontAwesomeIcon icon={faExclamation} />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </span>
  );
}

export default TodoListItem;
