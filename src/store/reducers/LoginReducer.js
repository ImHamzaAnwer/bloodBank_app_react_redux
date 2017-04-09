import {LoginActions} from '../actions/LoginActions';

const LOGIN_INITIAL_STATE = { isLogin: false };

export var LoginReducer = (state = LOGIN_INITIAL_STATE, action) => {
    switch (action.type) {
        case LoginActions.LOGINSUCCESS:
            return { ...state, isLogin: true };

        default:
            return state;
    }
}