import { combineReducers } from 'redux';
import authReducer from './authReducer';
import todosReducer from './todosReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  auth: authReducer,
  form: formReducer
});

export default rootReducer;
