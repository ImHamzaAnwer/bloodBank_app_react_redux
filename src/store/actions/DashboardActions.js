import * as firebase from 'firebase';

export class DashboardActions {
    static FETCH_FROM_FIREBASE = "FETCH_FROM_FIREBASE";
    static FILTER_SUCCESS = "FILTER_SUCCESS";

    static filterSuccess(data1,data2){
        return { 
            type: DashboardActions.FILTER_SUCCESS,
            payload1: data1,
            payload2: data2
         };
    }
    static filter(sortData) {
        return (dispatch) => {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < sortData.length; i++) {
                if (sortData[i].bloodGroup == "A+" || sortData[i].bloodGroup == "B+") {
                    arr1.push(sortData[i]);
                    console.log(arr1, "A+ can give to these")
                }

                
                if (sortData[i].bloodGroup == "B+" || sortData[i].bloodGroup == "O+") {
                    arr2.push(sortData[i]);
                    console.log(arr2, "B+ can give to these")
                }
            }
            dispatch(DashboardActions.filterSuccess(arr1,arr2));
        }
    }

    static fetchFromFirebase(data) {
        return {
            type: DashboardActions.FETCH_FROM_FIREBASE,
            payload: data
        }
    }
    static fetching() {
        return (dispatch) => {
            let refRoot = firebase.database().ref().child('donorData/');
            refRoot.on('value', (snapshot) => {
                var arr = [];
                var donorObj = snapshot.val();
                for (var key in donorObj) {
                    arr.push(donorObj[key]);
                    // console.log(arr);
                }
                console.log(arr);
                dispatch(DashboardActions.fetchFromFirebase(arr));
            });
        }
    }
}