import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';

import { ModalButton } from './Button';
import { editContact } from 'redux/contacts/contacts-operations';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import {
  StyledForm,
  StyledInput,
  StyledLabel,
  Box,
} from './ContactEditForm.styled';
import { IconButton } from 'components/ContactForm/IconButton';

export const ContactEditForm = ({ id, name, number, onSubmit }) => {
  const initialState = { id, name, number };
  const [contact, setContact] = useState({
    ...initialState,
  });
  const dispatch = useDispatch();
  const nameInputId = useMemo(() => shortid.generate(), []);
  const telInputId = useMemo(() => shortid.generate(), []);

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;
    setContact(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  };
  const handleClose = () => {
    onSubmit();
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editContact(contact));
    onSubmit();
    setContact({ ...initialState });
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <Box>
        <StyledInput
          type="text"
          value={contact.name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          id={nameInputId}
          placeholder=" "
        />
        <StyledLabel htmlFor={nameInputId}>Name</StyledLabel>
      </Box>
      <Box>
        <StyledInput
          value={contact.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          id={telInputId}
          placeholder=" "
        />
        <StyledLabel htmlFor={telInputId}>Number</StyledLabel>
      </Box>

      <ModalButton text="Edit contact" type="submit" />
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

ContactEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  actualContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
