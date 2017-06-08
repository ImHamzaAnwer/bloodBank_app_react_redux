import React, { Component } from 'react';
import Nav from '../components/AppBar';
class Main extends Component {
    render() {
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        );
    }
}

export default Main;