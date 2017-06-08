import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import { FETCH_FROM_FIREBASE, FILTER_SUCCESS, FILTER_HOGYA } from './types'

/*
export const filter = (dataToFilter, bldVal) => {
    return (dispatch) => {
        var arr2 = [];
        if (bldVal === "A+") {
            for (var i = 0; i < dataToFilter.length; i++) {
                if (dataToFilter[i].bloodGroup === "A+" || dataToFilter[i].bloodGroup === "A-" ||
                    dataToFilter[i].bloodGroup === "O+" || dataToFilter[i].bloodGroup === "O-") {
                    arr2.push(dataToFilter[i]);
                }
            }
        }

        else if (bldVal === "A-") {
            for (var j = 0; j < dataToFilter.length; j++) {
                if (dataToFilter[j].bloodGroup === "A-" || dataToFilter[j].bloodGroup === "O-") {
                    arr2 = [];
                    arr2.push(dataToFilter[j]);
                }
            }
        }

        else if (bldVal === "O+") {
            for (var k = 0; k < dataToFilter.length; k++) {
                if (dataToFilter[k].bloodGroup === "O+" || dataToFilter[k].bloodGroup === "O-") {
                    arr2.push(dataToFilter[k]);
                }
            }
        }

        else if (bldVal === "O-") {
            for (var l = 0; l < dataToFilter.length; l++) {
                if (dataToFilter[l].bloodGroup === "O-") {
                    arr2.push(dataToFilter[l]);
                }
            }
        }

        else if (bldVal === "AB+") {
            for (var m = 0; m < dataToFilter.length; m++) {
                if (dataToFilter[m].bloodGroup === "B+" || dataToFilter[m].bloodGroup === "B-" ||
                    dataToFilter[m].bloodGroup === "O+" || dataToFilter[m].bloodGroup === "O-" ||
                    dataToFilter[m].bloodGroup === "A+" || dataToFilter[m].bloodGroup === "A-" ||
                    dataToFilter[m].bloodGroup === "AB-" || dataToFilter[m].bloodGroup === "AB+") {
                    arr2.push(dataToFilter[m]);
                }
            }
        }

        else if (bldVal === "B+") {
            for (var n = 0; n < dataToFilter.length; n++) {
                if (dataToFilter[n].bloodGroup === "B+" || dataToFilter[n].bloodGroup === "B-" ||
                    dataToFilter[n].bloodGroup === "O+" || dataToFilter[n].bloodGroup === "O-") {
                    arr2.push(dataToFilter[n]);
                }
            }
        }

        console.log(arr2, "filtered data");
        dispatch(filterSuccess(arr2));
    }

}
*/

export const filter = (dataToFilter, bldVal) => {
    return (dispatch) => {
        var filtered = [];

        dataToFilter.filter((person) => {
            if (bldVal == "O+")
                return filtered.push(person.bloodGroup == "O+")

            if (bldVal == "A+")
                return filtered.push(person.bloodGroup == "A+")

        });
        console.log(filtered, "resuktttttt")
        dispatch({ type: FILTER_HOGYA, payload: filtered })
    }
}

export const checkLogin = (loginState) => {
    return (dispatch) => {
        // if (loginState == false) {
        //     browserHistory.replace("/login");
        // } else {
        //     browserHistory.replace("/dashboard");
        // }
    }
}

export const signout = (loginState) => {
    return (dispatch) => {
        firebase.auth().signOut().then(function () {
            browserHistory.replace("/login");
        })
    }
}


export const fetchFromFirebase = (data) => {
    return {
        type: FETCH_FROM_FIREBASE,
        payload: data
    }
}

export const fetching = (blood, data) => {
    console.log(blood, "bloodgroup");
    return (dispatch) => {
        firebase.database().ref().child('donorData/')
            .on('value', (snapshot) => {
                var arr = []; // all users data come to this array 
                var donorObj = snapshot.val();
                for (var key in donorObj) {
                    arr.push(donorObj[key]);
                    // console.log(arr);
                }
                dispatch(fetchFromFirebase(arr));
            })
    }
}