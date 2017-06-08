import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import * as firebase from "firebase";
import Routes from './Routes';

//importing Material UI Comps
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


var config = {
  apiKey: "AIzaSyC6fewk3LM8TWKRKrq4GhmDq4XPCDVNSi8",
  authDomain: "blood-bank-app-reactredux.firebaseapp.com",
  databaseURL: "https://blood-bank-app-reactredux.firebaseio.com",
  projectId: "blood-bank-app-reactredux",
  storageBucket: "blood-bank-app-reactredux.appspot.com",
  messagingSenderId: "938774298715"
};

firebase.initializeApp(config);


ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Routes />
    </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
);
