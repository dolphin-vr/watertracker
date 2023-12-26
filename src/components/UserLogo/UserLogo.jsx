import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/selectors';
import { getCurrentUser } from '../../shared/api/auth';
import UserLogoModal from '../UserLogoModal/UserLogoModal';

const UserLogo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch]);

    const handleButtonClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>
                {currentUser.userAvatar ? (
                    <>
                        <img src={currentUser.userAvatar} alt={currentUser.userName} />
                        <span>{currentUser.userName}</span>
                    </>
                ) : currentUser.userName ? (
                    <>
                        <div className="initial-avatar">{currentUser.userName.charAt(0).toUpperCase()}</div>
                        <span>{currentUser.userName}</span>
                    </>
                ) : (
                    <div className="initial-avatar">V</div>
                )}
            </button>

            {isModalOpen && <UserLogoModal userName={currentUser.userName} userAvatar={currentUser.userAvatar} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default UserLogo;

//тут треба буде переправити назви в залежності від того як зберігатимуться дані на бек