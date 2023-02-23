import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectAuthError,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
    authError: useSelector(selectAuthError),
  };
};
