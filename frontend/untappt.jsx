import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  let store = configureStore();

  //test
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //test

  ReactDOM.render(<h1>In construction...</h1>, root);
})