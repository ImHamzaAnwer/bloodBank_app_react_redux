import React, { Component } from 'react';
import { Paper, TextField, RaisedButton } from 'material-ui';
import { DonorRegActions } from '../store/actions/DonorRegActions';
import {connect} from 'react-redux';


function mapStateToProps(donorState) {
    return donorState;
}

class DonorRegCont extends Component {
    constructor() {
        super();
        this._handleDonorReg = this._handleDonorReg.bind(this);
    }

    _handleDonorReg() {
        var donorData = {
            bloodGroup: this.refs.bloodGroup.getValue(),
            age: this.refs.age.getValue(),
            address: this.refs.address.getValue(),
            health: this.refs.health.getValue()
        }
        this.props.dispatch(DonorRegActions.donorSignup(donorData));
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Paper zDepth={2} style={{ width: "50%", padding: "15px", margin: "70px auto", textAlign: "center" }}>
                    <h1>Donor Registration</h1>
                    <TextField
                        ref="age"
                        type="text"
                        floatingLabelText="Age"
                        fullWidth={true}
                    /><br />
                    <TextField
                        ref="bloodGroup"
                        type="text"
                        floatingLabelText="Blood Group"
                        fullWidth={true}
                    /><br />
                    <TextField
                        ref="address"
                        type="text"
                        floatingLabelText="Address"
                        fullWidth={true}
                    /><br />
                    <TextField
                        ref="health"
                        type="text"
                        floatingLabelText="Health"
                        fullWidth={true}
                    />
                    <RaisedButton label="submit" onClick={this._handleDonorReg} />
                </Paper>
            </div>
        );
    }
}

export default connect(mapStateToProps)(DonorRegCont);