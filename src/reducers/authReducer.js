import * as actions from '../actions/actionTypes'

const authReducer = (state = [], action) => {
  switch(action.type) {
    case actions.AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
      
    case actions.UnAUTHENTICATED:
      return {
        state: [],
        authenticated: false,
        error: action.error
      };

    default:
      return state;    
  }
}

export default authReducer
