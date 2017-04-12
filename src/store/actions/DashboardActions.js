import * as firebase from 'firebase';
import { browserHistory } from 'react-router';

export class DashboardActions {
    static FETCH_FROM_FIREBASE = "FETCH_FROM_FIREBASE";
    static FILTER_SUCCESS = "FILTER_SUCCESS";

    static checkLogin(loginState) {
        return (dispatch) => {
            if (loginState == false) {
                browserHistory.replace("/login");
            } else {
                browserHistory.replace("/dashboard");
            }
        }
    }

    static signout(loginState) {
        return (dispatch) => {
            firebase.auth().signOut().then(function () {
                browserHistory.replace("/login");
            })
        }
    }

    static filterSuccess(data1, data2) {
        return {
            type: DashboardActions.FILTER_SUCCESS
        };
    }

    static fetchFromFirebase(data) {
        return {
            type: DashboardActions.FETCH_FROM_FIREBASE,
            payload: data
        }
    }

    static fetching(blood) {
        return (dispatch) => {
            let refRoot = firebase.database().ref().child('donorData/');
            refRoot.on('value', (snapshot) => {
                var arr = []; // all users data come to this array 
                var arr2 = []; // filtered data

                var donorObj = snapshot.val();
                for (var key in donorObj) {
                    arr.push(donorObj[key]);
                    // console.log(arr);
                }

                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].bloodGroup === blood) {
                        arr2.push(arr[i]);
                    } else if (blood == "") {
                        arr2.push(arr[i]);
                    }
                }
                console.log(arr2, "arr2");
                dispatch(DashboardActions.fetchFromFirebase(arr2));
            });
        }
    }
}