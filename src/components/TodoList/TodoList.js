import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchTasks } from '../../actions/actionCreators'
import history from '../../history';
import TodoListItem from '../TodoListItem';

import './TodoList.css';

const TodoList = ({filter}) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.auth.authenticated);
  const tasks = useSelector(state => state.todos)

  useEffect(() => {
    authenticated ? dispatch(fetchTasks(filter)) : history.push('/login');
  }, [authenticated, dispatch, filter]);

  const elements = tasks.map((task) => {
    return (
      <li key={task.id} className="list-group-item">
        <TodoListItem
          { ...task }
        />
      </li>
    );
  });

  return (<ul className="todo-list list-group">{ elements }</ul>);
};

export default TodoList;
