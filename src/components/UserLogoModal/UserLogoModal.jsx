import React, { useState } from 'react';
import Modal from 'react-modal';
import UserInfoModal from '../UserInfoModal/UserInfoModal'; 
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';

Modal.setAppElement('#root'); // Вказуємо кореневий елемент вашого додатку

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
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            contentLabel="User Modal"
        >
            <div>
                <button className="close-button" onClick={onClose}>Закрити</button>
                <div>
                    <button onClick={openUserInfoModal}>Setting</button>
                    <button onClick={openUserLogoutModal}>Log out</button>
                </div>
            </div>

            {isUserInfoModalOpen && <UserInfoModal onClose={() => setIsUserInfoModalOpen(false)} />}
            {isUserLogoutModalOpen && <UserLogoutModal onClose={() => setIsUserLogoutModalOpen(false)} />}
        </Modal>
    );
};

export default UserLogoModal;