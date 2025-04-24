
// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:8081/api/auth/register',
// });

// // Add token to request headers
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers['x-auth-token'] = token;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// export default API;
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8081/api/auth', // Main base URL
});

// Add token to request headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;
