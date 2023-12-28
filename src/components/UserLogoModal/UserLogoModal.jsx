import React, { useState } from 'react';
import Modal from 'react-modal';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';
import SettingModal from '../SettingModal/SettingModal'

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
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            contentLabel="User Modal"
        >
            <div>
                <button className="close-button" onClick={onClose}>X</button>
                <div>
                    <button onClick={openUserInfoModal}>Setting</button>
                    <button onClick={openUserLogoutModal}>Log out</button>
                </div>
            </div>

            {isUserInfoModalOpen && <SettingModal onClose={() => setIsUserInfoModalOpen(false)} />}
            {isUserLogoutModalOpen && <UserLogoutModal onClose={() => setIsUserLogoutModalOpen(false)} />}
        </Modal>
    );
};

export default UserLogoModal;