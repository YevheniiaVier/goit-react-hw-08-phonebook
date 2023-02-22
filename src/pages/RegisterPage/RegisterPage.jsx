import { Section } from 'components/Section/Section';
import { Navigate } from 'react-router-dom';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from 'redux/auth/auth-operations';
import { getAuthError, getIsLoggedIn } from 'redux/auth/auth-selectors';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLoggedIn = useSelector(getIsLoggedIn);

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
      {status && <ErrorMessage text={message} />}
    </Section>
  );
};

export default RegisterPage;
