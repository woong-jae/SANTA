import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        
        dispatch({ type: FETCH_ALL, data });
    } catch (error) {
        console.error(error);
    }
}

export const getPostByMt = (mountain) => async (dispatch) => {
    try {
        const { data } = await api.fetchPostByMt(mountain);
        
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

export const updatePost = (_id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(_id, post);

        dispatch({ type: UPDATE, data });
    } catch (error) {
        console.error(error);
    }
}

export const deletePost = (_id) => async (dispatch) => {
    try {
        await api.deletePost(_id);

        dispatch({ type: DELETE, data: _id });
    } catch (error) {
        console.error(error);
    }
}