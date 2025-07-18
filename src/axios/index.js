import axios from 'axios';
import {getCookie} from '/src/utils/cookie-helper'

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://your-api-url.com/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optionally, you can add interceptors for handling tokens
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie('access_token'); // Get token from cookie
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;