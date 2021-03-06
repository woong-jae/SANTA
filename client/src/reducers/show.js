import { FETCH_ONE } from '../constants/actionTypes';

const showReducer = (state = { post: null }, action) => {
    switch (action.type) {
        case FETCH_ONE:
            localStorage.setItem('card', JSON.stringify({ ...action?.data }));
            return { ...state, post: action?.data };
        default:
            return state;
    }
}

export default showReducer;