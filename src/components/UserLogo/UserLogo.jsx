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

<<<<<<< HEAD
  // useEffect(() => {
  //     dispatch(getCurrentUser());
  // }, [dispatch]);
=======
    // useEffect(() => {
    //     dispatch(getCurrentUser());
    // }, [dispatch]);  
>>>>>>> 3aa43ddc567cfaf92e902c051daaa2fac08df2bb

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

<<<<<<< HEAD
  return (
    <div>
      <button onClick={handleButtonClick}>VVV</button>
      {isModalOpen && <UserLogoModal onClose={() => setIsModalOpen(false)} />}
      {/* <button onClick={handleButtonClick}>
                {currentUser.userAvatar ? (
=======
    return (
        <div>
            <button onClick={handleButtonClick}>VVV</button>
            {isModalOpen && <UserLogoModal onClose={() => setIsModalOpen(false)} />}
            {/* <button onClick={handleButtonClick}>
                {currentUser.avatarURL ? (
>>>>>>> 3aa43ddc567cfaf92e902c051daaa2fac08df2bb
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

<<<<<<< HEAD
            {isModalOpen && <UserLogoModal userName={currentUser.userName} userAvatar={currentUser.userAvatar} onClose={() => setIsModalOpen(false)} />} */}
    </div>
  );
=======
            {isModalOpen && <UserLogoModal userName={currentUser.username} userAvatar={currentUser.avatarURL} onClose={() => setIsModalOpen(false)} />} */}
        </div>
    );
>>>>>>> 3aa43ddc567cfaf92e902c051daaa2fac08df2bb
};

export default UserLogo;

//тут треба буде переправити назви в залежності від того як зберігатимуться дані на бек
