import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title } from 'components/Title/Title';
import { Notification } from 'components/Notification/Notification';
import { Loader } from 'components/Loader/Loader';

import noContactImg from '../../images/no-contacts.png';

import { selectFilter } from 'redux/filter/filter-selectors';

import { setFilter } from 'redux/filter/filter-slice';
import { selectors, operations } from 'redux/contacts';

export const MyContacts = () => {
  const contacts = useSelector(selectors.selectFilteredContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectors.selectIsLoading);
  const error = useSelector(selectors.selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  const onClearBtnClick = () => {
    dispatch(setFilter(''));
  };

  return (
    <>
      <Filter value={filter} onChange={onSetFilter} onClear={onClearBtnClick} />
      <Title text="Contacts" />
      {isLoading && <Loader />}
      {error && <p>`{error}, please try again later`</p>}
      {contacts.length > 0 && <ContactList contacts={contacts} />}
      {!error && !isLoading && filter === '' && !contacts[0] && (
        <Notification
          text="There is no contact yet, you can add a new one!"
          imgPath={noContactImg}
        />
      )}
      {filter && !contacts[0] && (
        <Notification text="No contact found" imgPath={noContactImg} />
      )}
    </>
  );
};
