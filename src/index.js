import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import firebase from './firebase/firebase';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import {todoAction} from './store/actions/todoActions';
// store.dispatch(todoAction.fetchData());

//importing Material UI Comps
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


//importing Components
import MainComponent from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import DonorReg from './components/DonorReg';
import Dashboard from './components/Dashboard';
import { DashboardActions } from './store/actions/DashboardActions';

store.dispatch(DashboardActions.fetching());
ReactDOM.render(
  // <Provider store={store}>
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={MainComponent}>
          <IndexRoute component={Login}/>
          <Route path="signup" component={Signup} />
          <Route path="login" component={Login} />
          <Route path="donor_registration" component={DonorReg} />
          <Route path="dashboard" component={Dashboard} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
);
