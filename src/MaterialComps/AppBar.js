import React from 'react';
import {FlatButton,AppBar} from "material-ui";
import {Link} from 'react-router';
const Nav = () => (
  <AppBar
    title={<span>Blood Bank App</span>}
    iconElementRight={
      <span>
        <Link to="/signup"><FlatButton label="SignUp" /></Link>
        <Link to="/login"><FlatButton label="Login" /></Link>
        <Link to="/dashboard"><FlatButton label="Dashboard" /></Link>
      </span>}
  />
);

export default Nav;