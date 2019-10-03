import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  let preLoadedState;
  if (window.currentUser) {
    preLoadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    }
    store = configureStore(preLoadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})