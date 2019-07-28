import { LOAD_TASKS, ADD_TASK, TOGGLE_TASK_DONE, TOGGLE_TASK_IMPORTANT, DELETE_TASK } from '../actions/actionTypes';

const todosReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_TASKS:
      return action.tasks;

    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          done: false,
          important: false
        }
      ];

    case TOGGLE_TASK_DONE:
      return state.map(task => (task.id === action.id) ? {...task, done: !task.done} : task);    
    
    case TOGGLE_TASK_IMPORTANT:
      return state.map(task => (task.id === action.id) ? {...task, important: !task.important} : task);

    case DELETE_TODO:
        return state.filter(tasks => task.id !== action.id);

    default:
        return state;    
  }
}

export default todosReducer
