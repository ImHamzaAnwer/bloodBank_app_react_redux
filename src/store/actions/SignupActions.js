import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
export class SignupActions {
    static SIGNUP = "SIGNUP";
    static SIGNUPSUCCESS = "SIGNUP_SUCCESS";

    static fbLogin() {
        return (dispatch) => {
            var provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function (result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                var user = result.user;
                browserHistory.push("/dashboard");
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
            });
        }
    }

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