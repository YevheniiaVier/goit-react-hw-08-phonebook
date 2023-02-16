import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title } from 'components/Title/Title';
import { Notification } from 'components/Notification/Notification';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
import { IconButton } from 'components/IconButton/IconButton';
import { Container } from './Mycontacts.styled';

import noContactImg from '../../images/no-contacts.png';
import { ReactComponent as AddIcon } from '../../icons/addContact.svg';

import { selectFilter } from 'redux/filter/filter-selectors';

import { setFilter } from 'redux/filter/filter-slice';
import { selectors, operations } from 'redux/contacts';

export const MyContacts = () => {
  const [showModal, setShowModal] = useState(false);
  const contacts = useSelector(selectors.selectFilteredContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectors.selectIsLoading);
  const error = useSelector(selectors.selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  const onClearBtnClick = () => {
    dispatch(setFilter(''));
  };

  return (
    <>
      <IconButton onClick={toggleModal} type="button" aria-label="Add contact">
        <AddIcon width="40" height="40" fill="#29668b" />
      </IconButton>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onSubmit={toggleModal} />
        </Modal>
      )}
      {/* <Title text="Phonebook" /> */}
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
