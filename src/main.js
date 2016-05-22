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

ReactDOM.render(
  <Provider store={store}>
    <MiniDashboard />
  </Provider>,
  document.getElementById('app')
);

setTimeout(() => {
  store.dispatch(miniDashboardActions.startListeningToWelcomeCard());
  store.dispatch(miniDashboardActions.startListeningToCardList());
});
