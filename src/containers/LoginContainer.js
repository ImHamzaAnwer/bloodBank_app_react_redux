import React, { Component } from 'react';
import { Paper, TextField, RaisedButton } from 'material-ui';
import { LoginActions } from '../store/actions/LoginActions';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
function mapStateToProps(loginState) {
    return loginState;
}

class LoginContainer extends Component {
    validate() {
        if (this.props.LoginReducer.isLogin === true)
            browserHistory.push("/dashboard");
        else
            browserHistory.push("/login");
    }


    handleLoginSubmit() {
        var loginData = {
            email: this.refs.loginEmail.getValue(),
            pass: this.refs.loginPass.getValue()
        }
        this.props.dispatch(LoginActions.Login(loginData));
    }

    render() {
        return (
            <Paper zDepth={2} style={{ width: "50%", padding: "15px", margin: "70px auto", textAlign: "center" }}>
                <h1>Login Form</h1>
                <TextField
                    ref="loginEmail"
                    floatingLabelText="Email"
                    fullWidth={true}
                /><br />
                <TextField
                    ref="loginPass"
                    floatingLabelText="Password"
                    fullWidth={true}
                />
                <RaisedButton label="Login" onClick={this.handleLoginSubmit.bind(this)} />
            </Paper>
        );
    }
}

export default connect(mapStateToProps)(LoginContainer);