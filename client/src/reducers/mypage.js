import { FETCH_CREATED, FETCH_APPLIED, FETCH_ACCEPTED } from '../constants/actionTypes';

const myPageReducer = (state = { created: [], applied: [], accepted: [] }, action) => {
    switch (action.type) {
        case FETCH_CREATED:
            return { ...state, created: action?.data };
        case FETCH_APPLIED:
            return {...state, applied: action?.data};
        case FETCH_ACCEPTED:
            return {...state, accepted: action?.data};
        default:
            return state;
    }
}

export default myPageReducer;