import React, { Component } from 'react';
import { Paper, TextField, RaisedButton, DropDownMenu, MenuItem } from 'material-ui';
import { DonorRegActions } from '../store/actions/DonorRegActions';
import { connect } from 'react-redux';


var bloodgroups = [
    "A+", "B+", "AB+",
    "O+", "A-", "B-",
    "AB-", "O-"
]

function mapStateToProps(donorState) {
    return donorState;
}

class DonorReg extends Component {
    constructor() {
        super();
        this.state = {
            BloodGroupVal: "",
            value: 1
        }
        this._handleDonorReg = this._handleDonorReg.bind(this);
        this._handleDropdown = this._handleDropdown.bind(this);
    }

    _handleDropdown = (event, index, value) => this.setState({ BloodGroupVal: value });

    _handleDonorReg() {
        var donorData = {
            donorName: this.refs.donorName.getValue(),
            bloodGroup: this.state.BloodGroupVal,
            age: this.refs.age.getValue(),
            address: this.refs.address.getValue(),
            contact: this.refs.contact.getValue()
        }
        this.props.dispatch(DonorRegActions.donorSignup(donorData));
    }

    render() {
        console.log(this.props.DonorRegReducer);
        return (
            <div>
                <Paper zDepth={2} style={{ width: "50%", padding: "15px", margin: "70px auto", textAlign: "center" }}>
                    <h1>Donor Registration</h1>
                    <TextField
                        ref="donorName"
                        type="text"
                        floatingLabelText="Donor Name"
                        fullWidth={true}
                    /><br />

                    <DropDownMenu value={this.state.BloodGroupVal} onChange={this._handleDropdown}>
                        {
                            bloodgroups.map((bloodgroup, idx) => {
                                return <MenuItem key={idx} value={bloodgroup} primaryText={bloodgroup} />;
                            })
                        }
                    </DropDownMenu>
                    <br />


                    <br />
                    <TextField
                        ref="age"
                        type="text"
                        floatingLabelText="Age"
                        fullWidth={true}
                    /><br />
                    <TextField
                        ref="address"
                        type="text"
                        floatingLabelText="Address"
                        fullWidth={true}
                    /><br />
                    <TextField
                        ref="contact"
                        type="text"
                        floatingLabelText="Contact Number"
                        fullWidth={true}
                    /><br />
                    <RaisedButton label="submit" onClick={this._handleDonorReg} />
                </Paper>
            </div>
        );
    }
}

export default connect(mapStateToProps)(DonorReg);