import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useState, useMemo, useCallback } from 'react';
import shortid from 'shortid';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import { initialState } from './initialState';
// import { selectors, operations } from 'redux/contacts';
import { Button } from 'components/ContactForm/Button';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  Box,
} from './RegisterForm.styled';
// import { IconButton } from 'components/ContactForm/IconButton';
// const notify = text =>
// toast.error(text, { theme: 'colored', pauseOnHover: true });

export const RegisterForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });
  // const dispatch = useDispatch();
  // const contacts = useSelector(selectors.selectContacts);

  const nameInputId = useMemo(() => shortid.generate(), []);
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
    // const { elements } = e.currentTarget;
    // const normalizedName = elements.name.value.toLowerCase();
    // const normalizedEmail = elements.email.value.toLowerCase();
    // if (
    //   contacts.find(contact => normalizedName === contact.name.toLowerCase())
    // ) {
    //   return notify(`${elements.name.value} is already in contacts`);
    // }

    // const foundNumber = contacts.find(
    //   contact => normalizedPhone === contact.phone.toLowerCase()
    // );
    // if (foundNumber) {
    //   return notify(
    //     `${elements.phone.value} is already belong to ${foundNumber.name}`
    //   );
    // }
    // dispatch(operations.addContact(state));
    // console.log(state);
    onSubmit(state);
    setState({ ...initialState });
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <Box>
        <StyledInput
          type="text"
          value={state.name}
          name="name"
          required
          onChange={handleChange}
          id={nameInputId}
          placeholder=" "
        />
        <StyledLabel htmlFor={nameInputId}>Name*</StyledLabel>
      </Box>
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

      <Button text="Register" type="submit" active={true} />
      {/* <ToastContainer autoClose={2000} /> */}
    </StyledForm>
  );
};

// RegisterForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
