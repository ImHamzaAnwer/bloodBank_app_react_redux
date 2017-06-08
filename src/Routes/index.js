import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from '../pages/Main';
import Welcome from '../pages/Welcome';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import DonorReg from '../pages/DonorReg';
import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Welcome}>
        <IndexRoute component={Login} />
        <Route path="signup" component={Signup} />
        <Route path="login" component={Login} />
      </Route>

      <Route component={Main}>
        <Route path="/donor_registration" component={DonorReg} />
        <Route path="/dashboard" component={Dashboard} />
      </Route>
    </Router>
  );
}

export default Routes;