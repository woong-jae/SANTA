import axios from "axios";

const API = axios.create({ baseURL: 'https://santa-project.herokuapp.com/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

// USER //
export const getUser = (_id) => API.get(`/user/${_id}`);
export const loginUser = (formData) => API.post("/user/signin", formData);
export const createUser = (formData) => API.post("/user/signup", formData);
export const updateUser = (_id, userData) => API.patch(`/user/${_id}`, userData);
export const deleteUser = (_id) => API.delete(`/user/${_id}`);

// POSTS //
// GET
export const fetchPosts = () => API.get(`/post`);
export const getPostById = (_id) => API.get(`/post/${_id}`);
export const getUserPosts = (userId) => API.get(`/post/created/${userId}`);
export const getUserAppliedPosts = (userId) => API.get(`/post/applied/${userId}`);
export const getUserAcceptedPosts = (userId) => API.get(`/post/accepted/${userId}`);
export const fetchPostByMt = (mountain, date, peopleNum) => API.get(`/post/search/${mountain}/${date}/${peopleNum}`);
// POST
export const createPost = (post) => API.post("/post", post);
// UPDATE
export const updatePost = (_id, post) => API.patch(`/post/${_id}`, post);
export const applyPost = (_id, userID) => API.patch(`/post/apply/${_id}`, userID);
export const unApplyPost = (_id, userID) => API.patch(`/post/unapply/${_id}`, userID);
export const acceptMember = (_id, userID) => API.patch(`/post/accept/${_id}`, userID);
export const leavePost = (_id, userID) => API.patch(`/post/leave/${_id}`, userID);
// DELETE
export const deletePost = (_id) => API.delete(`/post/${_id}`);

// 산림청 공공데이터 //
export const getMountainInfo = (mountain) => API.get(`/forest/${mountain}`);
export const getMountainDetailInfo = (mountain) => API.get(`/forest/detail/${mountain}`);
