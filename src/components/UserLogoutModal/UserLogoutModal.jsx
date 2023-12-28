import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/auth';

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
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            contentLabel="Log out"
        >
            <div>
                <button onClick={onClose}>X</button>
                <h1>Log out</h1>
                <p>Do you really want to leave?</p>
                <button onClick={onClose}>Cancel</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </Modal>
    );
};

export default UserLogoutModal;
