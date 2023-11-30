import axios from 'axios';

const API_BASE_URL =
    process.env.NODE_ENV === 'production' ?
    `${process.env.REACT_APP_PRODUCTION}` :
    `${process.env.REACT_APP_DEV}`;

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});

export default axiosInstance;