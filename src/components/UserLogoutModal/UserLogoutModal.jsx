import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/auth';
import { ModalStyled, ModalContainer, Backdrop, Title, XBtn, TitleContainer, Ask, Wrap, CancelBtn, LogoutBtn } from './UserLogoutModal.styled';
import sprite from '../../images/sprite.svg';

Modal.setAppElement('#root');

const UserLogoutModal = ({ onClose }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
    dispatch(logoutUser()).then((result) => {
      if (result) {
        onClose();
      }
    });
  };

    return (
      <ModalStyled
        isOpen={true}
        onRequestClose={onClose}
        contentLabel="Log out"
        overlayClassName="custom-overlay"
      >
        <Backdrop onClick={onClose}/>
          <ModalContainer>
            <TitleContainer>
              <Title>Log out</Title>
              <XBtn onClick={onClose}>
                <svg stroke="#407BFF" width="24" height="24">
                  <use href={sprite + "#modalclose"}></use>
                </svg>
              </XBtn>
            </TitleContainer>
            <Ask>Do you really want to leave?</Ask>
            <Wrap>
              <CancelBtn onClick={onClose}>Cancel</CancelBtn>
              <LogoutBtn onClick={handleLogout}>Log out</LogoutBtn>
            </Wrap>
          </ModalContainer>
      </ModalStyled>
    );
};

export default UserLogoutModal;
