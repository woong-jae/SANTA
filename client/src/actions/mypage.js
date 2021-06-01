import { FETCH_APPLIED, FETCH_CREATED } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getUserPosts = (userId) => async (dispatch) => {
    try {
        const { data } = await api.getUserPosts(userId);
        
        dispatch({ type: FETCH_CREATED, data });
    } catch (error) {
        console.error(error);
    }
}

export const getUserAppliedPosts = (userId) => async (dispatch) => {
    try {
        const { data } = await api.getUserAppliedPosts(userId);
        
        dispatch({ type: FETCH_APPLIED, data });
    } catch (error) {
        console.error(error);
    }
}