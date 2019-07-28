import * as actions from './actionTypes';

export function loadTasks(tasks) {
  return { type: actions.LOAD_TASKS, tasks: tasks }
}

export function addTask(id, name) {
  return { type: actions.ADD_TASK, id: id, name: name }
}

export function toggleTaskDone(id) {
  return { type: actions.TOGGLE_TASK_DONE, id: id }
}

export function toggleTaskImportant(id) {
  return { type: actions.TOGGLE_TASK_IMPORTANT, id: id }
}

export function deleteTask(id) {
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
