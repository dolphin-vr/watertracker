import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../shared/api/auth';

Modal.setAppElement('#root');

const UserLogoutModal = ({ onClose }) => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            // відправка запиту на бекенд для видалення сесії користувача
            await dispatch(logoutUser());
            onClose();
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            contentLabel="Log out"
        >
            <div>
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Log out</h2>
                <p>Do you really want to leave?</p>
                <button onClick={onClose}>Cancel</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </Modal>
    );
};

export default UserLogoutModal;
