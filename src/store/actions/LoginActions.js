import * as firebase from 'firebase';

export class LoginActions{
    static LOGINSUCCESS  = "LOGIN_SUCCESS"

    static LoginSuccess(){
        return {type: LoginActions.LOGINSUCCESS}
    }

    static Login(loginData){
        return(dispatch)=>{
            firebase.auth().signInWithEmailAndPassword(loginData.email,loginData.pass).then((loginResponse)=>{
                console.log(loginResponse);
                dispatch(LoginActions.LoginSuccess());
            });
        }
    }
}