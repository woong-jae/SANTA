import axios from 'axios';

const API = axios.create({ baseURL: 'http"//localhost:5000/user' });

export const getUser = (_id) => API.get(`/user/${_id}`);
export const loginUser = (formData) => API.post('/user/signin', formData);
export const createUser = (formData) => API.post('/user/signup', formData);
export const updateUser = (_id, userData) => API.patch(`/user/${_id}`, userData);
export const deleteUser = (_id) => API.delete(`/user/${_id}`);