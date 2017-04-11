import React, { Component } from 'react';
import { Paper,TextField,RaisedButton } from 'material-ui';
import { SignupActions } from '../store/actions/SignupActions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return state;
}

class Signup extends Component {
    constructor() {
        super();
        this._handleSignupSubmit = this._handleSignupSubmit.bind(this);
    }

    _handleSignupSubmit() {
        var signupData = {
            firstName: this.refs.fName.getValue(),
            lastName: this.refs.lName.getValue(),
            email: this.refs.email.getValue(),
            password: this.refs.password.getValue()
        };

        this.props.dispatch(SignupActions.Signup(signupData));
    }

    render() {
        // console.log(this.props.SignupReducer);
        return (
            <div>
                <Paper zDepth={2} style={{ width: "50%", padding: "15px", margin: "70px auto", textAlign: "center" }}>
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
                    <RaisedButton label="submit" onClick={this._handleSignupSubmit}/>
                </Paper>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Signup);
