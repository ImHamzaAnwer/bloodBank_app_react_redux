import React, { Component } from 'react';
import { Paper, TextField, RaisedButton } from 'material-ui';
import { connect } from 'react-redux';
import { fbLogin, signup } from '../store/actions';

function mapStateToProps(state) {
    return state;
}

class Signup extends Component {
    constructor() {
        super();
        this._handleSignupSubmit = this._handleSignupSubmit.bind(this);
        this._fbLogin = this._fbLogin.bind(this);
    }

    _fbLogin() {
        this.props.fbLogin();
    }

    _handleSignupSubmit() {
        var signupData = {
            firstName: this.refs.fName.getValue(),
            lastName: this.refs.lName.getValue(),
            email: this.refs.email.getValue(),
            password: this.refs.password.getValue()
        };

        this.props.signup(signupData);
    }

    render() {
        return (
            <div className="col-md-12">
                <Paper zDepth={1} style={{ width: "50%", padding: "15px", margin: "0 auto", textAlign: "center" }}>
                    <h1>Signup Form</h1>
                    <TextField
                        ref="fName"
                        type="text"
                        floatingLabelText="First Name"
                        fullWidth={true}
                    /><br />
                    <TextField
                        ref="lName"
                        type="text"
                        floatingLabelText="Last Name"
                        fullWidth={true}
                    /><br />
                    <TextField
                        ref="email"
                        type="text"
                        floatingLabelText="Email"
                        fullWidth={true}
                    /><br />
                    <TextField
                        ref="password"
                        type="text"
                        floatingLabelText="Password"
                        fullWidth={true}
                    />
                    <RaisedButton label="submit" onClick={this._handleSignupSubmit} />
                    <RaisedButton primary label="Facebook Login" onClick={this._fbLogin} />
                </Paper>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Signup);
