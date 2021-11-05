import axios from "axios";

const API = axios.create({ baseURL: 'https://tablechart.herokuapp.com/api' })

export const getUserInfo = () => API.get(`/view`);
export const Register =(data) => API.post('/register', {data});
export const Login =(data) => API.post('/login', {data});
export const Logout =() => API.get('/logout');
