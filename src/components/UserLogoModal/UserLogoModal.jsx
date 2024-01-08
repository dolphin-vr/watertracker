import React, { useState } from 'react';
import Modal from 'react-modal';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';
import SettingModal from '../SettingModal/SettingModal'
import { ModalStyled, ContainerULM, UserLogoModalBtn, UserLogoModalName } from './UserLogoModal.styled';
import sprite from "../../images/sprite.svg";

Modal.setAppElement('#root'); 

const UserLogoModal = ({ onClose }) => {
    const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
    const [isUserLogoutModalOpen, setIsUserLogoutModalOpen] = useState(false);

    const openUserInfoModal = () => {
        setIsUserInfoModalOpen(true);
        setIsUserLogoutModalOpen(false);
    };

    const openUserLogoutModal = () => {
        setIsUserInfoModalOpen(false);
        setIsUserLogoutModalOpen(true);
    };

    return (
        <ModalStyled
            isOpen={true}
            onRequestClose={onClose}
            contentLabel="User Modal"
            overlayClassName="OverlayLM"
        >
            <ContainerULM>
                <UserLogoModalBtn onClick={openUserInfoModal}>
                    <svg width="16" height="16" stroke="#407BFF">
                        <use href={sprite + "#settings"}></use>
                    </svg>
                    <UserLogoModalName>Setting</UserLogoModalName>
                </UserLogoModalBtn>
                <UserLogoModalBtn onClick={openUserLogoutModal}>
                    <svg width="16" height="16" stroke="#407BFF">
                        <use href={sprite + "#logout"}></use>
                    </svg>
                    <UserLogoModalName>Log out</UserLogoModalName>
                </UserLogoModalBtn>
            </ContainerULM>
        {isUserInfoModalOpen && <SettingModal onClose={() => setIsUserInfoModalOpen(false)} />}
        {isUserLogoutModalOpen && <UserLogoutModal onClose={() => setIsUserLogoutModalOpen(false)} />}
        </ModalStyled>
    );
};

export default UserLogoModal;