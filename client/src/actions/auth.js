import { AUTH, LOGOUT } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(formData);

    dispatch({ type: AUTH, data });
  } catch (error) {
    console.error(error);
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createUser(formData);

    dispatch({ type: AUTH, data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = (_id) => async (dispatch) => {
    try {
        await api.deleteUser(_id);

        dispatch({ type: LOGOUT });
    } catch (error) {
        console.error(error);
    }
}

export const updateUser = (_id, formData) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(_id, formData);

        dispatch({ type: AUTH, data });
    } catch (error) {
        console.error(error);
    }
}
