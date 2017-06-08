import * as firebase from 'firebase';
import { DONOR_REG_SUCCESS } from './types';

export const donorSignup = (donorData) => {
    return (dispatch) => {
        firebase.database().ref().child("/donorData").push(donorData);
        dispatch({ type: DONOR_REG_SUCCESS });
    }
}