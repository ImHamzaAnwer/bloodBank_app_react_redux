import { DonorRegActions } from '../actions/DonorRegActions';

const DONOR_REG_STATE = { isDonor: false }
export var DonorRegReducer = (state = DONOR_REG_STATE, action) => {
    switch (action.type) {
        case DonorRegActions.DONOR_REG_SUCCESS:
            return {...state, isDonor: true};
        default:
            return state;
    }
}