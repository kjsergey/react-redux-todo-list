import * as actions from './actionTypes';
import API from '../utils/API';
import { getAuthHeader, handleError } from '../helpers/requestHelper';
import history from '../history';

export const fetchTasks = (filter) => (dispatch) => {
  let filterParam;
  const config = getAuthHeader();

  switch (filter) {
    case 'active':
      filterParam = '?done=false';
      break;
    case 'done':
      filterParam = '?done=true';
      break;
    default:
      filterParam = '';
  }

  API.get(`tasks${filterParam}`, config)
  .then(response => {
    const tasks = response.data.data.map(({id, attributes}) => {
      return {id, ...attributes}
    });
    dispatch(loadedTasks(tasks));
  })
  .catch(error => {
    handleError(error, history);
  });
}

export const loadedTasks = (tasks) => {
  return {
    type: actions.LOAD_TASKS,
    tasks: tasks
  }
}

export const createTask = (taskName) => (dispatch) => {
  const config = getAuthHeader();

  API.post('tasks', {name: taskName}, config)
  .then(response => {
    const {data: {data: {id, attributes:{name}}}} = response;
    dispatch(addedTask(id, name));
  })
  .catch(error => {
    if (error.response && error.response.status === 401) {
      history.push('/logout');
    } else if (error.response && error.response.status === 422) {
      dispatch(addFormValidationError(error.response.data.errors.slice(-1)[0].detail));
    } else {
      console.log(error);
    }
  })
}

export const addedTask = (id, name) => {
  return { type: actions.ADD_TASK, id: id, name: name }
}

export const toggleTaskDone = (id, done) => (dispatch) => {
  const config = getAuthHeader();
  
  API.patch(`tasks/${id}`, {done: !done}, config)
  .then(response => {
    dispatch(toggledTaskDone(id));
  })
  .catch(error => {
    handleError(error, history);
  })
}

export const toggledTaskDone = (id) => {
  return { type: actions.TOGGLE_TASK_DONE, id: id }
}

export const toggleTaskImportant = (id, important) => (dispatch) => {
  const config = getAuthHeader();
  
  API.patch(`tasks/${id}`, {important: !important}, config)
  .then(response => {
    dispatch(toggledTaskImportant(id));
  })
  .catch(error => {
    handleError(error, history);
  })
}

export const toggledTaskImportant = (id) => {
  return { type: actions.TOGGLE_TASK_IMPORTANT, id: id }
}

export const removeTask = (id) => (dispatch) => {
  const config = getAuthHeader();

  API.delete(`tasks/${id}`, config)
  .then(response => {
    dispatch(deletedTask(id));
  })
  .catch(error => {
    handleError(error, history);
  })
}

export const deletedTask = (id) => {
  return { type: actions.DELETE_TASK, id: id }
}

export const authenticated = () => {
  return {
    type: actions.AUTHENTICATED
  }
}

export const unauthenticated = (error) => {
  return {
    type: actions.UnAUTHENTICATED, error: error
  }
}

export const addFormValidationError = (error) => {
  return {
    type: actions.ADD_FORM_VALIDATION_ERROR, error: error
  }
}
