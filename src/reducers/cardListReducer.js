import * as C from '../constants'
import initialState from '../initialState'

const cardListReducer = (state = initialState.cardList, {type, data}) => {
  switch (type) {
    case C.DISPLAY_CARD_LIST:
      return [...state, ...data]
    default:
      return state
  }
}

export default cardListReducer
