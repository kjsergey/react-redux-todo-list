import * as actions from '../actions/actionTypes'

const formReducer = (state = {}, action) => {
  switch(action.type) {
    case actions.ADD_FORM_VALIDATION_ERROR:
      console.log('fdf');
      return {
        ...state,
        validationError: action.error
      };

    default:
      return state;    
  }
}

export default formReducer
