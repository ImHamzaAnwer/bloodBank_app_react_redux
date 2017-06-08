import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

export default class Sidebar extends React.Component {
  render() {
    const { docked, onRequestChange, open, onTouchTap } = this.props;
    return (
      <div>
        <Drawer
          onRequestChange={onRequestChange}
          docked={docked}
          open={open}>
          <Link to="/signup">
            <MenuItem onTouchTap={onTouchTap}>Signup</MenuItem>
          </Link>

          <Link to="/login">
            <MenuItem onTouchTap={onTouchTap}>Signup</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}