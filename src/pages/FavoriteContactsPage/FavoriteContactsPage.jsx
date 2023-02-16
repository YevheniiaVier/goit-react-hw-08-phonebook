import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectors, operations } from 'redux/contacts';
import { ContactList } from 'components/ContactList/ContactList';
import { Section } from 'components/Section/Section';
const FavoriteContactsPage = () => {
  const contacts = useSelector(selectors.selectFavoriteContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <ContactList contacts={contacts} />
    </Section>
  );
};

FavoriteContactsPage.defaultProps = {
  contacts: [],
};

FavoriteContactsPage.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default FavoriteContactsPage;
