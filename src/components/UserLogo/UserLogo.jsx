import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserName, selectUserAvatar } from '../../redux/user/userSelectors';
import UserLogoModal from '../UserLogoModal/UserLogoModal';

const UserLogo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const userName = useSelector(selectUserName);
    const userAvatar = useSelector(selectUserAvatar);

    const handleButtonClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
    <div>
        <button onClick={handleButtonClick}>
            {userAvatar ? (
            <>
                <img src={userAvatar} alt={userName} />
                <span>{userName}</span>
            </>
            ) : userName ? (
            <>
                <div className="initial-avatar">{userName.charAt(0).toUpperCase()}</div>
                <span>{userName}</span>
            </>
            ) : (
            <div className="initial-avatar">V</div>
            )}
        </button>

        {isModalOpen && (
            <UserLogoModal userName={userName} userAvatar={userAvatar} onClose={() => setIsModalOpen(false)} />
        )}
    </div>
    );
};

export default UserLogo;