import { AuthLink, AuthBox } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthBox>
      <AuthLink to="/register">Sign up</AuthLink>
      <AuthLink to="/login">Log in</AuthLink>
    </AuthBox>
  );
};
