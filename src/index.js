import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {todoAction} from './store/actions/todoActions';
store.dispatch(todoAction.fetchData());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
