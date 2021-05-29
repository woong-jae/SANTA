import { FETCH_ONE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getPostById = (_id, history) => async (dispatch) => {
    try {
        const { data } = await api.getPostById(_id);

        dispatch({ type: FETCH_ONE, data });

        history.push('/list/show');
    } catch (error) {
        console.error(error);
    }
}

export const setShowCard = (_id) => async (dispatch) => {
    try {
        const { data } = await api.getPostById(_id);

        dispatch({ type: FETCH_ONE, data });
    } catch (error) {
        console.error(error);
    }
}

export const updatePost = (_id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(_id, post);

        dispatch({ type: FETCH_ONE, data });
    } catch (error) {
        console.error(error);
    }
}

export const applyPost = (_id, user) => async (dispatch) => {
    try {
        const { data } = await api.applyPost(_id, user);

        dispatch({ type: FETCH_ONE, data });
    } catch (error) {
        console.error(error);
    }
}