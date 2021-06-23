import { FETCH_ONE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getPostById = (_id) => async (dispatch) => {
    try {
        const { data } = await api.getPostById(_id);

        await dispatch({ type: FETCH_ONE, data });
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

export const applyPost = (_id, userID) => async (dispatch) => {
    try {
        const { data } = await api.applyPost(_id, userID);

        dispatch({ type: FETCH_ONE, data });
    } catch (error) {
        console.error(error);
    }
}

export const unApplyPost = (_id, userID) => async (dispatch) => {
    try {
        const { data } = await api.unApplyPost(_id, userID);

        dispatch({ type: FETCH_ONE, data });
    } catch (error) {
        console.error(error);
    }
}

export const acceptMember = (_id, userID) => async (dispatch) => {
    try {
        const { data } = await api.acceptMember(_id, userID);

        dispatch({ type: FETCH_ONE, data });
    } catch (error) {
        console.error(error);
    }
}

export const leavePost = (_id, userID) => async (dispatch) => {
    try {
        const { data } = await api.leavePost(_id, userID);

        dispatch({ type: FETCH_ONE, data });
    } catch (error) {
        console.error(error);
    }
}
