import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import { ModalButton } from './Button';
import { Checkbox } from 'components/ContactForm/Checkbox/Checkbox';
import { editContact } from 'redux/contacts/contacts-operations';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { selectors } from 'redux/contacts';

import {
  StyledForm,
  StyledInput,
  StyledLabel,
  Box,
} from './ContactEditForm.styled';
import { IconButton } from 'components/ContactForm/IconButton';

export const ContactEditForm = ({
  contactId,
  name,
  avatar,
  phone,
  favorite,
  onSubmit,
}) => {
  const initialState = { id: contactId, name, avatar, phone, favorite };
  const [contact, setContact] = useState({
    ...initialState,
  });
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.selectContacts);
  const nameInputId = useMemo(() => shortid.generate(), []);
  const telInputId = useMemo(() => shortid.generate(), []);
  const imgInputId = useMemo(() => shortid.generate(), []);

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
          value={contact.phone}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          id={telInputId}
          placeholder=" "
        />
        <StyledLabel htmlFor={telInputId}>Number</StyledLabel>
      </Box>
      <Box>
        <StyledInput
          value={contact.avatar ?? ''}
          type="url"
          name="avatar"
          id={imgInputId}
          placeholder=" "
          onChange={handleChange}
        />
        <StyledLabel htmlFor={imgInputId}>
          {contact.avatar ? 'Photo' : 'Add path to photo if you like'}
        </StyledLabel>
      </Box>

      <Checkbox
        value={contact.favorite}
        label={contact.favorite ? 'Remove from favorite' : 'Add to favorite'}
        name="favorite"
        onChange={handleChange}
        isChecked={contact.favorite}
      />
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
      phone: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      favorite: PropTypes.bool,
    })
  ),
};
