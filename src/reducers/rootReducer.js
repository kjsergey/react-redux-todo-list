import { combineReducers } from 'redux'
import authReducer from './authReducer'
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  auth: authReducer
});

export default rootReducer;
