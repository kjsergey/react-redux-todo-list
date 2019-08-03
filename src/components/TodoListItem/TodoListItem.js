import React from 'react';
import { useDispatch } from 'react-redux'
import { removeTask, toggleTaskDone, toggleTaskImportant } from '../../actions/actionCreators'

import { faTrash, faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './TodoListItem.css';

const TodoListItem = ({id, name, done, important}) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(removeTask(id));
  }

  const toggleImportant = () => {
    dispatch(toggleTaskImportant(id));
  }

  const toggleDone = () => {
    dispatch(toggleTaskDone(id));
  }

  let classNames = 'todo-list-item';
  if (important) {
    classNames += ' important';
  }

  if (done) {
    classNames += ' done';
  }

  return (
    <span className={classNames}>
      <span className="todo-list-item-label"
            onClick={toggleDone}>{name}</span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={toggleImportant}>
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
