import axios from 'axios';
import { toast } from 'react-hot-toast';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'An error occurred';
    
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    } else if (error.response?.status === 403) {
      // Handle forbidden access
      toast.error('You do not have permission to perform this action');
    } else if (error.response?.status === 404) {
      // Handle not found
      toast.error('Resource not found');
    } else if (error.response?.status >= 500) {
      // Handle server errors
      toast.error('Server error. Please try again later.');
    } else {
      // Handle other errors
      toast.error(message);
    }

    return Promise.reject(error);
  }
);

export default api;