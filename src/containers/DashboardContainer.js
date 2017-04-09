import React,{Component} from 'react';
// import {DonorRegActions} from '../store/reducers/DonorRegReducer';
import {connect} from 'react-redux';

function mapStateToProps(dashboardState){
    return  dashboardState;
}

class DashboardContainer extends Component{
    render(){
        console.log(this.props.LoginReducer, "hamzaaa");
        if(this.props.LoginReducer.isLogin === false)
        return <h1>Please Login First</h1>

        else return <h1>Donor List</h1>
    }
}

export default connect(mapStateToProps)(DashboardContainer);