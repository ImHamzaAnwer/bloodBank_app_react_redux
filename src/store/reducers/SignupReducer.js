import {SignupActions} from '../actions/SignupActions';

const SIGNUP_INITIAL_STATE = {isSignup: false};

export var SignupReducer = (state=SIGNUP_INITIAL_STATE ,action)=>{
    switch(action.type){
        case SignupActions.SIGNUPSUCCESS:
            return {...state,isSignup: true};
            
        // case SignupActions.SIGNUP_UNSUCCESS:
        //     return {...state,isSignup: true};

        default:
            return state;
    }
}