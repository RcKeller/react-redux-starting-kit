import 'file?name=[name].[ext]!./index.html';
import 'babel-polyfill';
import 'fastclick';
import 'font-awesome-sass-loader';
import 'material-design-lite';
import './scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import store from './store';
import MiniDashboard from './components/MiniDashboard.jsx';
import * as miniDashboardActions from './actions/miniDashboardActions';

// TEST DATA
const testData = {
  welcomeMsg: {
    title: 'Welcome to the Starter Kit',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vitae velit a congue.',
    imgUrl: 'http://icdn8.digitaltrends.com/image/funny-grumpy-cat-images-hd-wallpaper-1080x611-640x0.jpg'
  },
  cards: [
    {title: 'Foo', msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vitae velit a congue.', imgUrl: 'http://lorempixel.com/500/300/city/'},
    {title: 'Bar', msg: 'Etiam pretium a elit in varius. Ut vel est accumsan, interdum erat sit amet, lacinia risus.', imgUrl: 'http://lorempixel.com/500/300/nature/'}
  ]
};

ReactDOM.render(
  <Provider store={store}>
    <MiniDashboard />
  </Provider>,
  document.getElementById('app')
);

setTimeout(() => {
  store.dispatch(miniDashboardActions.displayWelcomeCard(testData.welcomeMsg));
  store.dispatch(miniDashboardActions.displayCardList(testData.cards));
});
