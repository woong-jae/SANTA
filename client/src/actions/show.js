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