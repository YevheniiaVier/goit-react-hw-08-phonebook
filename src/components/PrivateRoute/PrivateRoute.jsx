import { useAuth } from 'hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
export const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
