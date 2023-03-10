import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useState, useMemo, useCallback } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectors, operations } from 'redux/contacts';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { initialState } from './initialState';
import { Button } from './Button';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  Box,
} from './ContactForm.styled';
import { IconButton } from './IconButton';
const notify = text =>
  toast.error(text, { theme: 'colored', pauseOnHover: true });

export const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.selectContacts);

  const nameInputId = useMemo(() => shortid.generate(), []);
  const telInputId = useMemo(() => shortid.generate(), []);

  const handleChange = useCallback(({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;
    setState(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  }, []);
  const handleClose = () => {
    onSubmit();
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const normalizedName = elements.name.value.toLowerCase();
    const normalizedNumber = elements.number.value.toLowerCase();
    if (
      contacts.find(contact => normalizedName === contact.name.toLowerCase())
    ) {
      return notify(`${elements.name.value} is already in contacts`);
    }

    const foundNumber = contacts.find(
      contact => normalizedNumber === contact.number.toLowerCase()
    );
    if (foundNumber) {
      return notify(
        `${elements.number.value} is already belong to ${foundNumber.name}`
      );
    }
    dispatch(operations.addContact(state));
    onSubmit();
    setState({ ...initialState });
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <Box>
        <StyledInput
          type="text"
          value={state.name}
          name="name"
          pattern="^[a-zA-Z??-????-??]+(([' -][a-zA-Z??-????-?? ])?[a-zA-Z??-????-??]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          id={nameInputId}
          placeholder=" "
        />
        <StyledLabel htmlFor={nameInputId}>Name*</StyledLabel>
      </Box>
      <Box>
        <StyledInput
          type="tel"
          value={state.number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          id={telInputId}
          placeholder=" "
        />
        <StyledLabel htmlFor={telInputId}>Number*</StyledLabel>
      </Box>
      <Button text="Add contact" type="submit" active={false} />
      <ToastContainer autoClose={2000} />
      <IconButton
        onClick={handleClose}
        type="button"
        aria-label="Close modal window"
      >
        <CloseIcon width="20" height="20" fill="#29668b" />
      </IconButton>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
