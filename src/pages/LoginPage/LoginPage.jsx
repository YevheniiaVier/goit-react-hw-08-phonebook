import { Section } from 'components/Section/Section';
import { Navigate } from 'react-router-dom';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { useAuth } from 'hooks/useAuth';

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
      <p>LoginPage</p>
      <LoginForm onSubmit={onLogin} />
      {authError?.status && <ErrorMessage text={authError.LoginPagemessage} />}
    </Section>
  );
};

export default LoginPage;
