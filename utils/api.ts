import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') || 'https://sxv-backend-eight.vercel.app',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
  timeout: 30000, // 30 second timeout
})

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Debug logging for requests
    console.log('API Request:', {
      url: config.url,
      method: config.method,
      baseURL: config.baseURL,
      data: config.data,
      headers: config.headers
    });
    
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', {
      url: response.config.url,
      status: response.status,
      data: response.data
    });
    return response;
  },
  (error) => {
    console.error('API Error:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    
    if (error.response?.status === 401) {
      // Token is invalid or expired, clear it
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      // Don't redirect here to avoid infinite loops
    }
    return Promise.reject(error);
  }
);

export default api;
