import { createContext, useState, useEffect, useCallback } from 'react';
import jwtDecode from 'jwt-decode';
import AuthService from '../services/auth';

const UserContext = createContext();

//still needs to be cleaned (canceling the request on unmount)

export function UserContextWrapper({ children }) {
   const [userData, setUserData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState('');
   const refreshToken = useCallback(async () => {
      setIsLoading(true);
      try {
         const {
            data: { user },
         } = await AuthService.getUserData();
         if (user && user.accessToken) {
            const expires_in = jwtDecode(user.accessToken).exp;
            setTimeout(() => {
               console.log(Date.now > expires_in * 1000);
               refreshToken();
            }, (expires_in - 1) * 1000 - Date.now());
            setUserData(user);
         }
      } catch (err) {
         setError(err.response?.data?.error || 'internal server error');
      } finally {
         setIsLoading(false);
      }
   }, []);

   useEffect(() => {
      refreshToken();
   }, [refreshToken]);

   function handleUserUpdate(user) {
      if (user && user.accessToken) {
         const expires_in = jwtDecode(user.accessToken).exp;
         setTimeout(() => {
            refreshToken();
         }, (expires_in - 1) * 1000 - Date.now());
      }
      setUserData(user);
   }

   const context = {
      user: userData,
      setUser: handleUserUpdate,
      isLoading,
      error,
   };

   return (
      <UserContext.Provider value={context}>{children}</UserContext.Provider>
   );
}

export default UserContext;
