
import { CREATE, FETCH_ALL, DELETE } from '../constants/actionTypes';

const postReducer = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.data;
        case CREATE:
            return [ ...posts, action.data ];
        case DELETE:
            return posts.filter(post => post._id !== action.data);
        default:
            return posts;
    }
}

export default postReducer;