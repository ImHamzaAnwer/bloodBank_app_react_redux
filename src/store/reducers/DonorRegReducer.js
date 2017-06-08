import { DONOR_REG_SUCCESS } from '../actions/types';

const INITIAL_STATE = { isDonor: false }

export const DonorRegReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DONOR_REG_SUCCESS:
            return { ...state, isDonor: true };
        default:
            return state;
    }
}