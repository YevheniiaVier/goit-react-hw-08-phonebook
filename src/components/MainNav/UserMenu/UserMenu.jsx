import { useDispatch } from 'react-redux';

import { Menu, Mail, WelcomeMessage, BtnBox } from './UserMenu.styled';
// import { ItemLink } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { logout } from 'redux/auth/auth-operations';
import { ItemIconButton } from 'components/ContactItem/IconButton';
import { ReactComponent as LogoutIcon } from '../../../icons/logout.svg';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogout = () => dispatch(logout());

  return (
    <Menu>
      <BtnBox>
        <WelcomeMessage>Welcome, {user.name}</WelcomeMessage>
        <Mail>{user.email}</Mail>
      </BtnBox>
      <ItemIconButton onClick={handleLogout} type="button" aria-label="Logout">
        <LogoutIcon width="33" height="33" fill="#29668b" />
      </ItemIconButton>
    </Menu>
  );
};
