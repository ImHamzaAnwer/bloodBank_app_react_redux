import * as firebase from 'firebase';

export class DonorRegActions {
    static DONOR_REG_SUCCESS = "DONOR_REG_SUCCESS";

    static donorRegSuccess() {
        return { type: DonorRegActions.DONOR_REG_SUCCESS }
    }

    static donorSignup(donorData) {
        return (dispatch) => {
            firebase.database().ref().child("/donorData").push(donorData);
            dispatch(DonorRegActions.donorRegSuccess());
        }
    }
}