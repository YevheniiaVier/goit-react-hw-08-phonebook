import { UserMenuButton, Menu, Mail, WelcomeMessage } from './UserMenu.styled';
// import { ItemLink } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogout = () => dispatch(logout());

  return (
    <Menu>
      <WelcomeMessage>Welcome, {user.name}</WelcomeMessage>
      <Mail>{user.email}</Mail>
      <UserMenuButton onClick={handleLogout}>Logout</UserMenuButton>
    </Menu>
  );
};
