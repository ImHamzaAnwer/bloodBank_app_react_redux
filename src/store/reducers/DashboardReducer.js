import {DashboardActions} from '../actions/DashboardActions';

const DASHBOARD_INITIAL_STATE = {dataFetched: false, data:[]};

export var DashboardReducer = (state = DASHBOARD_INITIAL_STATE ,action)=>{
    switch(action.type){
        case DashboardActions.FETCH_FROM_FIREBASE:
            return {...state, dataFetched: true, data:action.payload};
        case DashboardActions.FILTER_SUCCESS:
            return {...state, data1:action.payload1, data2:action.payload2};
        default:
            return state;
    }
}