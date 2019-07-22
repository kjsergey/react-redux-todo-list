import * as actions from './actionTypes'

export function authenticated() {
  return { type: actions.AUTHENTICATED }
}

export function unauthenticated(error) {
  return { type: actions.UnAUTHENTICATED, error: error }
}
