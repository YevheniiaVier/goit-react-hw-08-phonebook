import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { IconButton } from 'components/IconButton/IconButton';
import { Modal } from 'components/Modal/Modal';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ReactComponent as AddIcon } from '../../icons/addContact.svg';

import { Header, List, Item, Link, Container } from './MainNav.styled';
import navItems from './items';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/theme-selectors';
import { useDispatch } from 'react-redux';
import { setTheme } from 'redux/theme/theme-slice';

export const MainNav = () => {
  const [showModal, setShowModal] = useState(false);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);
  const toggleTheme = () => {
    console.log(theme);
    const newTheme = theme === 'themeDark' ? 'theme' : 'themeDark';
    dispatch(setTheme(newTheme));
  };
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const elements = navItems.map(({ id, to, text }) => (
    <Item key={id}>
      <Link to={to}>{text}</Link>
    </Item>
  ));
  return (
    <Header>
      <Container>
        <List>{elements}</List>
        <IconButton
          onClick={toggleModal}
          type="button"
          aria-label="Add contact"
        >
          <AddIcon width="40" height="40" fill="#29668b" />
        </IconButton>
        {showModal && (
          <Modal onClose={toggleModal}>
            <ContactForm onSubmit={toggleModal} />
          </Modal>
        )}
        <button onClick={toggleTheme}>
          {theme === 'dark' ? (
            <span aria-label="Light mode" role="img">
              🌞
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              🌜
            </span>
          )}
        </button>
      </Container>
    </Header>
  );
};

MainNav.propTypes = {
  navItems: PropTypes.shape({
    id: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
