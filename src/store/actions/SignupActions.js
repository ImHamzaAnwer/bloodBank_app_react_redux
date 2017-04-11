import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
export class SignupActions {
    static SIGNUP = "SIGNUP";
    static SIGNUPSUCCESS = "SIGNUP_SUCCESS";

    static SignupSuccess() {
        return { type: SignupActions.SIGNUPSUCCESS }
    }

    static Signup(signupData) {
        return (dispatch) => {
            firebase.auth().createUserWithEmailAndPassword(signupData.email, signupData.password).then((response) => {
                //  console.log(response,"response from firebase")
                firebase.database().ref().child("userData/").push(signupData).then((res) => {
                    browserHistory.push("/login");
                });
                dispatch(SignupActions.SignupSuccess());
            });
        }
    }
}