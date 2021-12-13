import axios from 'axios';

axios.defaults.withCredentials = true;

const authRoutes = axios.create({
   baseURL: 'http://localhost:8080/api/v1/auth',
   headers: {
      'Content-Type': 'application/json',
   },
});

export { authRoutes };
