import * as firebase from 'firebase';
// import {HashRouter} from "react-router-dom";
// import {push} from 'react-router-redux';

export class SignupActions{
    static SIGNUP = "SIGNUP";
    static SIGNUPSUCCESS = "SIGNUP_SUCCESS";

    static SignupSuccess(){
        return { type: SignupActions.SIGNUPSUCCESS }
    }

    static Signup(signupData){
        return (dispatch)=>{
            firebase.auth().createUserWithEmailAndPassword(signupData.email, signupData.password).then((response)=>{
                console.log(response)
                firebase.database().ref().child("userData/").push(signupData);
                dispatch(SignupActions.SignupSuccess());             
            });
        }
    }
}