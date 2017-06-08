import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { browserHistory } from 'react-router';
import { RaisedButton, Tab, Tabs } from 'material-ui'
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  handleChange = (value) => {
    this.setState({ value });
  }

  handleActive(tab, value) {
    browserHistory.replace(`${tab.props['data-route']}`);
  }

  render() {
    const { contentStyles, tab } = styles
    return (
      <div>
        <Navbar />

        <div className="row">
          <div style={contentStyles} className="col-md-12">
            <h2>CONNECTING BLOOD DONORS TO THE COMMUNITY</h2>
            <p>PLEDGE YOUR BLOOD TO SOMEONE IN NEED</p>

            <Tabs
              inkBarStyle={{ width: '50%', marginLeft: 580, paddingTop: 3, backgroundColor: "#fff" }}
              tabItemContainerStyle={{ margin: "30px auto 5px auto", width: 200, backgroundColor: '#bf2626' }}
              value={this.state.activeTab}
              onChange={this.handleChange}
            >
              <Tab
                data-route="/login"
                onActive={this.handleActive}
                style={tab}
                label="Login"
                value={1} />

              <Tab
                data-route="/signup"
                onActive={this.handleActive}
                style={tab}
                label="Signup"
                value={2} />
            </Tabs>
          </div>
        </div>
        <div
          style={{
            padding: "60px 0 0 0",
            height: 500,
            background: "url('http://www.designbolts.com/wp-content/uploads/2012/12/simple-pattern-white-seamless-website-background.jpg') no-repeat fixed center",
            backgroundSize: "cover"
          }}>
            { this.props.children }
        </div>
      </div >
    );
  }
}

const styles = {
  tab: {
    width: 100,
    color: '#333',
  },
  contentStyles: {
    padding: 5,
    background: "#bf2626",
    textAlign: "center",
    color: "#fff"
  }
}

export default Welcome;