import React, { Component } from 'react';
import { DashboardActions } from '../store/actions/DashboardActions';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText, FlatButton, CardActions, DropDownMenu, MenuItem } from 'material-ui';
import { browserHistory } from 'react-dom';

var bloodGroups = ["A+", "B+", "O+"];

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

    _handleChange = (event, index, value) => { 
        this.setState({ bloodGroupVal: value }) 
        this._filterArray();
}

    fetchData() {
        this.props.dispatch(DashboardActions.fetching());
    }

    _filterArray() {
        this.props.dispatch(DashboardActions.filter(this.props.DashboardReducer.data));
    }

    render() {
        //  console.log(this.props.DashboardReducer.data,"dataaa")
        return (
            <div>
                <h1>List</h1>
                <h2>Filter List</h2>
                <DropDownMenu value={this.state.bloodGroupVal} onChange={this._handleChange}>
                    {
                        bloodGroups.map((vall,idx) => {
                            return  <MenuItem key={idx} value={vall} primaryText={vall} />
                        })
                    }

                </DropDownMenu>
                {
                    this.props.DashboardReducer.data.map((val, id) => {
                        return (
                            <Card key={id}>
                                <CardHeader
                                    title={<h3>{val.donorName}</h3>}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                />
                                <CardText expandable={true}>
                                    <h4>Blood Group: {val.bloodGroup}</h4>
                                    <h4>Contact: {val.contact}</h4>
                                    <h4>Age: {val.age}</h4>
                                    <h4>Address: {val.address}</h4>
                                </CardText>
                            </Card>
                        );
                    })
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(DashboardContainer);