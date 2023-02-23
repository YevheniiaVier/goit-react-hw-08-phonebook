import { useAuth } from 'hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};
