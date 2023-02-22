import { Section } from 'components/Section/Section';
import { Navigate } from 'react-router-dom';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { getAuthError, getIsLoggedIn } from 'redux/auth/auth-selectors';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLoggedIn = useSelector(getIsLoggedIn);

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
      {status && <ErrorMessage text={message} />}
    </Section>
  );
};

export default LoginPage;

// const RegisterPage = () => {
//   const dispatch = useDispatch();
//   const { status, message } = useSelector(getAuthError);
//   const isLoggedIn = useSelector(getIsLoggedIn);

//   const onRegister = userData => {
//     dispatch(signUp(userData));
//   };
//   if (isLoggedIn) {
//     return <Navigate to="/contacts" />;
//   }
//   return (
//     <Section>
// <p>RegisterPage</p>
// <RegisterForm onSubmit={onRegister} />
// {status && <ErrorMessage text={message} />}
//     </Section>
//   );
// };

// // export default RegisterPage;
