import * as actions from './actionTypes'

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
