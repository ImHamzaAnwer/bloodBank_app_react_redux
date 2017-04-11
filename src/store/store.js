import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {SignupReducer} from './reducers/SignupReducer';
import {LoginReducer} from './reducers/LoginReducer';
import {DonorRegReducer} from './reducers/DonorRegReducer';
import {DashboardReducer} from './reducers/DashboardReducer'; 
import {DashboarActions} from './actions/DashboardActions';

const rootReducer = combineReducers({
    SignupReducer,
    LoginReducer,
    DonorRegReducer,
    DashboardReducer
});

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(rootReducer,middleware);