import { UserMenuButton, Menu, Mail } from './UserMenu.styled';
// import { ItemLink } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <Menu>
      <Mail>mango@mail.com</Mail>
      <UserMenuButton>Logout</UserMenuButton>
    </Menu>
  );
};
