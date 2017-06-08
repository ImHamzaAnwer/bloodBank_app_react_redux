import React, { Component } from 'react';
import { checkLogin, signout, filter, fetching } from '../store/actions/DashboardActions';
import { connect } from 'react-redux';
import { Table, TableRow, TableHeader, TableBody, TableHeaderColumn, TableRowColumn, FlatButton, DropDownMenu, MenuItem } from 'material-ui';
import { browserHistory } from 'react-dom';

var bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            bloodGroupVal: "",
            value: 1
        }
        this._handleChange = this._handleChange.bind(this);
    }


    componentDidMount() {
        this.props.fetching();
        var loginState = this.props.isLogin;
        this.props.checkLogin(loginState);
    }

    _signout(loginState) {
        this.props.signout(loginState);
        // console.log(loginState);
    }


    _handleChange = (event, index, value) => {
        this.setState({ bloodGroupVal: value })
        this.props.filter(this.props.data, value);
    }

    handleBloodGroup() {
        this.props.fetching(this.state.bloodGroupVal);
    }
    fetchData() {
        this.props.fetching();
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <FlatButton label="Logout" onClick={this._signout.bind(this)} />
                <DropDownMenu value={this.state.bloodGroupVal} onChange={this._handleChange}>
                    {
                        bloodGroups.map((vall, idx) => {
                            return <MenuItem key={idx} value={vall} primaryText={vall} />;
                        })
                    }

                </DropDownMenu>


                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow displayBorder={true}>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Blood Group</TableHeaderColumn>
                            <TableHeaderColumn>Contact Number</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody showRowHover={true} displayRowCheckbox={false}>
                        {
                            this.props.data.map((val, id) => {
                                return (
                                    <TableRow key={id}>
                                        <TableRowColumn >{val.donorName}</TableRowColumn>
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

const mapStateToProps = ({ dashboard }) => {
    const { dataFetched, data, data2 } = dashboard
    return { dataFetched, data, data2 }
}


export default connect(mapStateToProps, { checkLogin, signout, filter, fetching })(Dashboard);