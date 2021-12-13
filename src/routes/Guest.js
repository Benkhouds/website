import useAuth from '../hooks/useAuth';
import { useLocation, Navigate } from 'react-router-dom';
import { Loader } from '../components';
function RequireAuth({ children }) {
   const { user, isLoading } = useAuth();
   const location = useLocation();
   if (isLoading) {
      return <Loader />;
   }
   if (user) {
      return <Navigate to="/" state={{ from: location }} />;
   }
   return children;
}

export default RequireAuth;
