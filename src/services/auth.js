import { authRoutes } from '../config/api';

class AuthService {
   async login(email, password) {
      return authRoutes.post('/login', {
         email,
         password,
      });
   }

   async register(firstName, lastName, email, password) {
      return authRoutes.post('/register', {
         firstName,
         lastName,
         email,
         password,
      });
   }
   async getUserData() {
      return authRoutes.post('/refresh-token', {});
   }
}

export default new AuthService();
