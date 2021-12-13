import { useContext } from 'react';
import UserContext from '../store/user-context';

function useAuth() {
   return useContext(UserContext);
}

export default useAuth;
