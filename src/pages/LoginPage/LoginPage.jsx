import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { login } from 'redux/auth/auth-operations';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Section } from 'components/Section/Section';
import { LoginForm } from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { authError, isLoggedIn } = useAuth();
  const onLogin = userData => {
    dispatch(login(userData));
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <Section>
      <LoginForm onSubmit={onLogin} />
      {authError?.status && <ErrorMessage text={authError.message} />}
    </Section>
  );
};

export default LoginPage;
