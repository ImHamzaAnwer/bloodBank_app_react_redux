import * as firebase from 'firebase';
import {browserHistory} from 'react-router';
export class LoginActions{
    static LOGINSUCCESS  = "LOGIN_SUCCESS"

    static LoginSuccess(){
        return {type: LoginActions.LOGINSUCCESS}
    }

    static Login(loginData){
        return(dispatch)=>{
            firebase.auth().signInWithEmailAndPassword(loginData.email,loginData.pass).then((loginResponse)=>{
                dispatch(LoginActions.LoginSuccess());

        });
        }
    }
}