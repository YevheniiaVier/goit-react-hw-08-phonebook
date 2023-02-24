import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { signUp } from 'redux/auth/auth-operations';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Section } from 'components/Section/Section';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const { isLoggedIn, authError } = useAuth();
  const onRegister = userData => {
    dispatch(signUp(userData));
  };
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <Section>
      <RegisterForm onSubmit={onRegister} />
      {authError?.status && <ErrorMessage text={authError.message} />}
    </Section>
  );
};

export default RegisterPage;
