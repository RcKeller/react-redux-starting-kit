import * as CONST from '../constants';
import Firebase from 'firebase';

const welcomeCardRef = new Firebase(CONST.FIREBASE).child('welcomeMsg');
const cardListRef = new Firebase(CONST.FIREBASE).child('cards');

export const displayWelcomeCard = (data) => ({
  type: CONST.DISPLAY_WELCOME_CARD,
  data: data
});

export const displayCardList = (data) => ({
  type: CONST.DISPLAY_CARD_LIST,
  data: data
});

export const startListeningToWelcomeCard = () => (dispatch) => {
  welcomeCardRef.on('value', (snapshot) => {
    dispatch(displayWelcomeCard(snapshot.val()));
  });
};

export const startListeningToCardList = () => (dispatch) => {
  cardListRef.on('value', (snapshot) => {
    dispatch(displayCardList(snapshot.val()));
  });
};
