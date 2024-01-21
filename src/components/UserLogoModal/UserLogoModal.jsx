import { useState, useEffect } from 'react';
import {
  ContainerULM,
  ULMContainer,
  UserLogoModalBtn,
  UserLogoModalName,
} from './UserLogoModal.styled';
import sprite from '../../images/sprite.svg';
import SettingModal from '../SettingModal/SettingModal';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';

export const UserLogoModal = ({isOpen, onClose}) => {
  const [selectedModal, setSelectedModal] = useState(null);

  const openModal = (modalType) => {
    setSelectedModal(modalType);
  };

  const closeModal = () => {
    setSelectedModal(null);
    onClose();
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
    if (e.keyCode === 27 && isOpen) {
      closeModal();
    }};
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen]);

  return (
    <ContainerULM style={{ display: isOpen ? 'block' : 'none' }}>
      <ULMContainer>
        <UserLogoModalBtn type="button" onClick={() => openModal('setting')}>
          <svg width="16" height="16" stroke="#407BFF">
            <use href={sprite + '#settings'}></use>
          </svg>
          <UserLogoModalName>Setting</UserLogoModalName>
        </UserLogoModalBtn>
        <UserLogoModalBtn type="button" onClick={() => openModal('logout')}>
          <svg width="16" height="16" stroke="#407BFF">
            <use href={sprite + '#logout'}></use>
          </svg>
          <UserLogoModalName>Log out</UserLogoModalName>
        </UserLogoModalBtn>
      </ULMContainer>

      {selectedModal === 'setting' && <SettingModal onClose={closeModal} />}
      {selectedModal === 'logout' && <UserLogoutModal onClose={closeModal} />}
    </ContainerULM>
  );
};

export default UserLogoModal;

