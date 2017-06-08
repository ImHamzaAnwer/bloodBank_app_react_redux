import React, { Component } from 'react';
import { Paper, TextField, RaisedButton } from 'material-ui';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import {fbLogin, login} from '../store/actions/authActions'

class Login extends Component {
    handleLoginSubmit() {
        var loginData = {
            email: this.refs.loginEmail.getValue(),
            pass: this.refs.loginPass.getValue()
        }
        this.props.login(loginData);

    }

    render() { 
        return (
            <div style={{ textAlign: "center" }} className="col-md-12">
                <Paper zDepth={1} style={{ width: "50%", padding: "15px", margin: "0 auto", textAlign: "center" }}>
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
                    <RaisedButton primary label="Login" onClick={this.handleLoginSubmit.bind(this)} />
                </Paper>
                <p>dont have an account ? <Link to="/signup">signup here</Link></p>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { isLogin } = auth
    return { isLogin }
}


export default connect(mapStateToProps, {fbLogin, login})(Login);