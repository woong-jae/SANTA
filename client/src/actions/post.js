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

export const getPostByMt = (mountain, date, peopleNum) => async (dispatch) => {
    try {
        const { data } = await api.fetchPostByMt(mountain, date, peopleNum);
        
        dispatch({ type: FETCH_ALL, data });
    } catch (error) {
        console.error(error);
    }
}

export const createPost = (post, user) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        const newPost = {...data, createdUser: user};

        dispatch({ type: CREATE, data: newPost });
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

export const applyPost = (_id, post) => async (dispatch) => {
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