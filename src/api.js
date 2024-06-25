import axios from 'axios';

// Create an instance of axios with default configuration
const api = axios.create({
  baseURL: 'https://udsmbestworker.onrender.com',// Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    // Optionally include other default headers
  },
});

// Interceptor to add Authorization header to requests
api.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem('token');
    console.log(access_token)
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
