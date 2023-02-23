import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeContact } from 'redux/contacts/contacts-operations';

import { Modal } from 'components/Modal/Modal';
import { ContactEditForm } from 'components/ContactEditModal/ContactEditForm';

import {
  StyledItem,
  Box,
  ButtonBox,
  TelBox,
  Name,
  InfoWrapper,
} from './ContactItem.styled';
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg';
import { ReactComponent as EditIcon } from '../../icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { ItemIconButton } from './IconButton';

export const ContactItem = ({ id, name, avatar, number, favorite }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to remove this contact?')) {
      dispatch(removeContact(id));
    }
  };

  const toggleEditModal = () => {
    setShowEditModal(prevState => !prevState);
  };

  return (
    <>
      {showEditModal && (
        <Modal onClose={toggleEditModal}>
          <ContactEditForm
            id={id}
            name={name}
            number={number}
            onSubmit={toggleEditModal}
          />
        </Modal>
      )}
      <StyledItem>
        <Box>
          <InfoWrapper>
            <Name>{name}</Name>

            <TelBox>
              <PhoneIcon width="20" height="20" fill="#29668b"></PhoneIcon>
              {number}
            </TelBox>
          </InfoWrapper>
        </Box>
        <ButtonBox>
          <ItemIconButton
            onClick={toggleEditModal}
            type="button"
            aria-label="Edit contact"
          >
            <EditIcon width="30" height="30" fill="#38D2D2" />
          </ItemIconButton>
          <ItemIconButton
            onClick={handleDelete}
            type="button"
            aria-label="Remove contact"
          >
            <DeleteIcon width="33" height="33" fill="#38D2D2" />
          </ItemIconButton>
        </ButtonBox>
      </StyledItem>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
