import { CREATE, FETCH_ALL, DELETE, UPDATE } from '../constants/actionTypes';

const postReducer = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.data;
        case CREATE:
            return [ ...posts, action.data ];
        case DELETE:
            return posts.filter(post => post._id !== action.data);
        case UPDATE:
            return posts.map((post) => post._id === action.data._id ? action.data : post);
        default:
            return posts;
    }
}

export default postReducer;