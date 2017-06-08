import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import  authReducer from './reducers/authReducer';
import { DonorRegReducer } from './reducers/DonorRegReducer';
import { DashboardReducer } from './reducers/DashboardReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    dashboard: DashboardReducer,
    DonorRegReducer
});

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(rootReducer, middleware);