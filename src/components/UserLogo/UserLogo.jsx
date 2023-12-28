import { useState } from "react";
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { selectCurrentUser } from '../../redux/auth/selectors';
// import { getCurrentUser } from '../../shared/api/auth';
import UserLogoModal from "../UserLogoModal/UserLogoModal";

const UserLogo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const dispatch = useDispatch();
  // const currentUser = useSelector(selectCurrentUser);

  // useEffect(() => {
  //     dispatch(getCurrentUser());
  // }, [dispatch]);

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

    return (
        <div>
            <button onClick={handleButtonClick}>VVV</button>
            {isModalOpen && <UserLogoModal onClose={() => setIsModalOpen(false)} />}
            {/* <button onClick={handleButtonClick}>
                {currentUser.avatarURL ? (
                    <>
                        <img src={currentUser.avatarURL} alt={currentUser.username} />
                        <span>{currentUser.username}</span>
                    </>
                ) : currentUser.username ? (
                    <>
                        <div className="initial-avatar">{currentUser.username.charAt(0).toUpperCase()}</div>
                        <span>{currentUser.username}</span>
                    </>
                ) : (
                    <div className="initial-avatar">V</div>
                )}
            </button>

            {isModalOpen && <UserLogoModal userName={currentUser.userName} userAvatar={currentUser.userAvatar} onClose={() => setIsModalOpen(false)} />} */}
    </div>
  );
};

export default UserLogo;

//тут треба буде переправити назви в залежності від того як зберігатимуться дані на бек
