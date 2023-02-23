import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { StyledContacts } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <StyledContacts>
      {contacts.map(contact => {
        const { contactId, avatar, name, number, favorite } = contact;

        return (
          <ContactItem
            key={contactId}
            id={contactId}
            number={number}
            avatar={avatar}
            name={name}
            favorite={favorite}
          />
        );
      })}
    </StyledContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      contactId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      favorite: PropTypes.bool,
    })
  ),
};
