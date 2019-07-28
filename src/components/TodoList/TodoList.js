import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { loadTasks } from '../../actions/actionCreators'
import API from '../../utils/API';
import history from '../../history';
import { getAuthHeader } from '../../helpers/requestHelper';
// import TodoListItem from '../TodoListItem';

import './TodoList.css';

const TodoList = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.auth.authenticated);
  const tasks = useSelector(state => state.todos)

  useEffect( () => {
    if (!authenticated) {
      return history.push('/login');
    }
    
    const config = getAuthHeader()

    API.get('tasks', config)
    .then(response => {
      dispatch(loadTasks(response.data));
    })
    .catch(error => {
      (error.response.status === 401) ? history.push('/logout') : console.log(error);
    })
  }, [authenticated, dispatch]);

  const elements = tasks.map((task) => {
    return (
      <li key={task.id} className="list-group-item">
        {/* <TodoListItem
          { ...task }
        /> */}
      </li>
    );
  });

  return (<ul className="todo-list list-group">{ elements }</ul>);
};

export default TodoList;
