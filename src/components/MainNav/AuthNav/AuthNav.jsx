import { AuthLink, AuthBox } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthBox>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Login</AuthLink>
    </AuthBox>
  );
};
