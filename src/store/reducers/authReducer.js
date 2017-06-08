import { LOGINSUCCESS, SIGNUPSUCCESS } from '../actions/types';

const INITIAL_STATE = { isLogin: false, isSignup: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGINSUCCESS:
            return { ...state, isLogin: true };

        case SIGNUPSUCCESS:
            return { ...state, isSignup: true };

        default:
            return state;
    }
}