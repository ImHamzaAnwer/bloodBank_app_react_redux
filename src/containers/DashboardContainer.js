import React, { Component } from 'react';
import { DashboardActions } from '../store/actions/DashboardActions';
import { connect } from 'react-redux';
import { Table, TableRow, TableHeader, TableBody, TableHeaderColumn, TableRowColumn, FlatButton, DropDownMenu, MenuItem } from 'material-ui';
import { browserHistory } from 'react-dom';

var bloodGroups = ["A+", "B+", "O+"];
var arr2 = [];

function mapStateToProps(dashboardState) {
    return dashboardState;
}

class DashboardContainer extends Component {
    constructor() {
        super();
        this.state = {
            bloodGroupVal: "",
            value: 1
        }
        this._handleChange = this._handleChange.bind(this);
    }


    componentDidMount() {
            var loginState = this.props.LoginReducer.isLogin;
            console.log(loginState,"yolalalalalal");
            this.props.dispatch(DashboardActions.checkLogin(loginState));
    }

    _signout(loginState){
        this.props.dispatch(DashboardActions.signout(loginState));
        console.log(loginState, "ye wlai");
}


    _handleChange = (event, index, value) => {
        this.setState({ bloodGroupVal: value })
        this.handleBloodGroup();
        this._check();

    }
    handleBloodGroup() {
        this.props.dispatch(DashboardActions.fetching(this.state.bloodGroupVal));
    }
    fetchData() {
        this.props.dispatch(DashboardActions.fetching());
    }

    render() {
        //  console.log(this.props.DashboardReducer.data,"dataaa")
        return (
            <div>
                <FlatButton label="Logout" onClick={this._signout.bind(this)}/>
                <h1>List</h1>
                {console.log(arr2)}
                <h2>Filter List</h2>



                <DropDownMenu value={this.state.bloodGroupVal} onChange={this._handleChange}>
                    {
                        bloodGroups.map((vall, idx) => {
                            return <MenuItem key={idx} value={vall} primaryText={vall} />
                        })
                    }

                </DropDownMenu>
                {/*<FlatButton type="submit" onClick={this.handleBloodGroup.bind(this)}>Click</FlatButton>*/}

                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Blood Group</TableHeaderColumn>
                            <TableHeaderColumn>Contact Number</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {
                            this.props.DashboardReducer.data.map((val, id) => {
                                return (
                                    <TableRow key={id}>
                                        <TableRowColumn>{val.donorName}</TableRowColumn>
                                        <TableRowColumn>{val.bloodGroup}</TableRowColumn>
                                        <TableRowColumn>{val.contact}</TableRowColumn>
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>


            </div>
        );
    }
}

export default connect(mapStateToProps)(DashboardContainer);