import { FETCH_CREATED, FETCH_APPLIED } from '../constants/actionTypes';

const myPageReducer = (state = { created: [], applied: [] }, action) => {
    switch (action.type) {
        case FETCH_CREATED:
            return { ...state, created: action?.data };
        case FETCH_APPLIED:
            return {...state, applied: action?.data};
        default:
            return state;
    }
}

export default myPageReducer;