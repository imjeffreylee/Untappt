import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  let store = configureStore();

  //test
  // window.store = store;
  // window.login = login;
  //test

  ReactDOM.render(<Root store={store} />, root);
})