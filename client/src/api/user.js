import axios from 'axios';

const url = 'http"//localhost:5000/user';

export const getUser = (_id) => axios.get(`${url}/${_id}`);
export const loginUser = (user) => axios.post(`${url}/login`, user);
export const createUser = (user) => axios.post(url, user);
export const updateUser = (_id, user) => axios.patch(`${url}/${_id}`, user);
export const deleteUser = (_id) => axios.delete(`${url}/${_id}`);