import React, { Component } from 'react';
import { FlatButton, AppBar } from "material-ui";
import Sidebar from './Sidebar';
import { Link } from 'react-router';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <Sidebar onTouchTap={this.handleClose} docked={false} open={this.state.open} onRequestChange={(open) => this.setState({ open })} />
        <AppBar
          title="Blood Bank App"
          onTouchTap={this.handleToggle}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    );
  }
}

export default Nav;