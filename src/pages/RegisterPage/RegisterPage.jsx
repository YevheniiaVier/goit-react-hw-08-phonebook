import { Section } from 'components/Section/Section';
import { Navigate } from 'react-router-dom';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/auth-operations';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { useAuth } from 'hooks/useAuth';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const { isLoggedIn, authError } = useAuth;
  const onRegister = userData => {
    dispatch(signUp(userData));
  };
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <Section>
      <p>RegisterPage</p>
      <RegisterForm onSubmit={onRegister} />
      {authError?.status && <ErrorMessage text={authError.message} />}
    </Section>
  );
};

export default RegisterPage;
