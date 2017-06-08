import { FETCH_FROM_FIREBASE, FILTER_SUCCESS, FILTER_HOGYA} from '../actions/types';

const INITIAL_STATE = { dataFetched: false, data: [] };

export const DashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case FETCH_FROM_FIREBASE:
            return { ...state, dataFetched: true, data: action.payload };

        // case FILTER_SUCCESS:
        //     return { ...state, data: action.payload };

        case FILTER_HOGYA:
            return { ...state, data: action.payload }

        default:
            return state;
    }
}