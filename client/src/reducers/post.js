
import { CREATE, FETCH_ALL } from '../constants/actionTypes';

const postReducer = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.data;
        case CREATE:
            return [ ...posts, action.data ];
        default:
            return posts;
    }
}

export default postReducer;