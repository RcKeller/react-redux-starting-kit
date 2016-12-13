import * as C from '../constants'

export const displayWelcomeCard = (data) => ({
  type: C.DISPLAY_WELCOME_CARD,
  data
})

export const displayCardList = (data) => ({
  type: C.DISPLAY_CARD_LIST,
  data
})
