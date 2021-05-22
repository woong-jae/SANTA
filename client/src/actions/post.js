import { FETCH_ALL, CREATE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        
        dispatch({ type: FETCH_ALL, data });
    } catch (error) {
        console.error(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, data });
    } catch (error) {
        console.error(error);
    }
}