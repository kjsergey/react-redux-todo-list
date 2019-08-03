import * as actions from './actionTypes';
import API from '../utils/API';
import { getAuthHeader, handleError } from '../helpers/requestHelper';
import history from '../history';

export const fetchTasks = () => (dispatch) => {
  const config = getAuthHeader();

  API.get('tasks', config)
  .then(response => {
    const tasks = response.data.data.map(({id, attributes}) => {
      return {id, ...attributes}
    });
    dispatch(loadTasks(tasks));
  })
  .catch(error => {
    handleError(error, history);
  });
}

export const loadTasks = (tasks) => {
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
    dispatch(addTask(id, name));
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

export const addTask = (id, name) => {
  return { type: actions.ADD_TASK, id: id, name: name }
}

export const toggleTaskDone = (id) => {
  return { type: actions.TOGGLE_TASK_DONE, id: id }
}

export const toggleTaskImportant = (id) => {
  return { type: actions.TOGGLE_TASK_IMPORTANT, id: id }
}

export const removeTask = (id) => (dispatch) => {
  const config = getAuthHeader();

  API.delete(`tasks/${id}`, config)
  .then(response => {
    dispatch(deleteTask(id));
  })
  .catch(error => {
    handleError(error, history);
  })
}

export const deleteTask = (id) => {
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
