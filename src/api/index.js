// import axios from "axios";

// const API = axios.create({
//     // baseURL: "https://stack-overflowproduction-ac43c0afadcc.herokuapp.com",
//     baseURL: "http://localhost:5000",
//   });

//   API.interceptors.request.use((req) => {
//     if (localStorage.getItem("Profile")) {
//       req.headers.authorization = `Bearer ${
//         JSON.parse(localStorage.getItem("Profile")).token
//       }`;
//     }
//     return req;
//   });

//   export const logIn = (authData) => API.post("/user/login", authData);
//   export const signUp = (authData) => API.post("/user/signup", authData);

//   export const postQuestion = (questionData) => API.post("/questions/Ask", questionData);
//   export const getAllQuestions = () => API.get("/questions/get");
//   export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
//   export const voteQuestion = (id, value, userId) =>
//   API.patch(`/questions/vote/${id}`, { value, userId});

//   export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
//   API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered , userId});

//   export const deleteAnswer = (id, answerId, noOfAnswers) =>
//   API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

//   export const getAllUsers = () => API.get("/user/getAllUsers");
// export const updateProfile = (id, updateData) =>
//   API.patch(`/user/update/${id}`, updateData);

import axios from 'axios';
export const baseUrl = 'https://stackoverflow-server-2weg.onrender.com';
// export const baseUrl = 'http://localhost:5000';
const API = axios.create({
    baseURL: baseUrl,
});

API.interceptors.request.use(req => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${
            JSON.parse(localStorage.getItem('Profile')).token
        }`;
    }
    return req;
});

export const logIn = authData => API.post('/user/login', authData);
export const signUp = authData => API.post('/user/signup', authData);
export const forgotPassword = authData =>
    API.post(`/user/forgot-password`, authData);
export const resetPassword = authData =>
    API.patch(`/user/reset-password`, authData);

export const postQuestion = questionData =>
    API.post('/questions/Ask', questionData);
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = id => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value) =>
    API.patch(`/questions/vote/${id}`, { value });

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) =>
    API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered });
export const deleteAnswer = (id, answerId, noOfAnswers) =>
    API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const getAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) =>
    API.patch(`/user/update/${id}`, updateData);
export const getLoginInfo = id => API.get(`/user/getLoginInfo/${id}`);
