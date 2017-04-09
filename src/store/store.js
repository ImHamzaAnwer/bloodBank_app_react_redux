import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {SignupReducer} from './reducers/SignupReducer';
import {LoginReducer} from './reducers/LoginReducer';
import {DonorRegReducer} from './reducers/DonorRegReducer';

const rootReducer = combineReducers({
    SignupReducer,LoginReducer,DonorRegReducer
});

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer,middleware);