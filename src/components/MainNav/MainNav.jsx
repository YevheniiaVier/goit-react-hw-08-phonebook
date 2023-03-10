import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { IconButton } from 'components/IconButton/IconButton';
import { Modal } from 'components/Modal/Modal';
import { ContactForm } from 'components/ContactForm/ContactForm';

import { ReactComponent as AddIcon } from '../../icons/addContact.svg';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';

import {
  Header,
  List,
  Item,
  ItemLink,
  Container,
  Toggle,
  RightMenuBox,
  Wrapper,
} from './MainNav.styled';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import navItems from './items';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/theme-selectors';
import { useDispatch } from 'react-redux';
import { setTheme } from 'redux/theme/theme-slice';
import { useAuth } from 'hooks/useAuth';

export const MainNav = () => {
  const [showModal, setShowModal] = useState(false);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);
  const toggleTheme = () => {
    const newTheme = theme === 'themeDark' ? 'theme' : 'themeDark';
    dispatch(setTheme(newTheme));
  };
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const elements = navItems.map(({ id, to, text }) => (
    <Item key={id}>
      <ItemLink to={to}>{text}</ItemLink>
    </Item>
  ));
  const icon =
    theme === 'themeDark' ? (
      <CgSun size={30} fill={'#0A5A87'} />
    ) : (
      <HiMoon size={30} fill={'#E5BE1A'} />
    );
  return (
    <Header>
      <Container>
        {isLoggedIn && (
          <RightMenuBox>
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
            <List>{elements}</List>
          </RightMenuBox>
        )}
        <Wrapper>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Wrapper>
        <Toggle
          style={{
            backgroundColor: theme === 'themeDark' ? '#E5BE1A' : '#0A5A87',
          }}
          onClick={toggleTheme}
        >
          {icon}
        </Toggle>
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
