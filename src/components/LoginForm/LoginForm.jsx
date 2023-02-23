// import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useState, useMemo, useCallback } from 'react';
import shortid from 'shortid';

import { initialState } from './initialState';
import { Button } from 'components/ContactForm/Button';
import { StyledForm, StyledInput, StyledLabel, Box } from './LoginForm.styled';

export const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const emailInputId = useMemo(() => shortid.generate(), []);
  const passwordInputId = useMemo(() => shortid.generate(), []);

  const handleChange = useCallback(({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;
    setState(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(state);
    setState({ ...initialState });
  };

  return (
    <StyledForm
      // autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box>
        <StyledInput
          type="email"
          value={state.email}
          name="email"
          required
          onChange={handleChange}
          id={emailInputId}
          placeholder=" "
        />
        <StyledLabel htmlFor={emailInputId}>E-mail*</StyledLabel>
      </Box>
      <Box>
        <StyledInput
          value={state.password}
          type="text"
          name="password"
          id={passwordInputId}
          placeholder=" "
          onChange={handleChange}
        />
        <StyledLabel htmlFor={passwordInputId}>Password*</StyledLabel>
      </Box>

      <Button text="Log In" type="submit" active={true} />
    </StyledForm>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
