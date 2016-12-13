import * as C from '../constants'
import initialState from '../initialState'

/*
Defining initial state,
then accepting argument objects that contain the action and the data being acted on.
*/
const welcomeCardReducer = (
  state = initialState.welcomeCard, {type, data}) => {
  switch (type) {
    case C.DISPLAY_WELCOME_CARD:
      return Object.assign({}, state, data)
    default:
      return state
  }
}

export default welcomeCardReducer
