import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserName, selectUserAvatar } from '../../redux/user/userSelectors';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import { UserAvatarIMG, UserContainer, UserBtn, UserName, UserAppCase, UserLetter, UserNameV } from './UserLogo.styled';
import sprite from "../../images/sprite.svg";

const UserLogo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);

  const handleButtonClick = () => {
      setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <UserBtn onClick={handleButtonClick}>
          {userAvatar ? (
          <>
            <UserContainer>
              <UserName>{userName}</UserName>
              <UserAvatarIMG src={userAvatar} alt={userName} />
              <svg width="16" height="16">
                <use href={sprite + "#arrowdown"}></use>
              </svg>
            </UserContainer>
          </>
          ) : userName ? (
          <>
            <UserContainer>
              <UserName>{userName}</UserName>
                <UserAppCase>
                  <UserLetter>
                    {userName.charAt(0).toUpperCase()}
                  </UserLetter>
                </UserAppCase>
              <svg width="16" height="16">
                <use href={sprite + "#arrowdown"}></use>
              </svg>
            </UserContainer>
          </>
          ) : (
            <UserContainer>
              <UserAppCase>
                <UserNameV>V</UserNameV>
              </UserAppCase>
              <svg width="16" height="16">
                <use href={sprite + "#arrowdown"}></use>
              </svg>
            </UserContainer>
          )}
      </UserBtn>

      {isModalOpen && (
          <UserLogoModal userName={userName} userAvatar={userAvatar} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default UserLogo;

// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import UserLogoModal from '../UserLogoModal/UserLogoModal';
// import avatar from '../../images/avatar.png';
// import { selectUserEmail } from '../../redux/user/userSelectors';
// import { UserLogoWrapper } from './UserLogo.styled';

// const UserLogo = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const userEmail = useSelector(selectUserEmail);

//   const handleButtonClick = () => {
//     setIsModalOpen(!isModalOpen);
//   };

// return (
//     <div>
//         <button onClick={handleButtonClick}>
//             <UserLogoWrapper className="initial-avatar">
//                 <p>{userEmail}</p>
//                 <img src={avatar} alt={avatar} width={26} height={26}/>
//             </UserLogoWrapper>
//         </button>

//         {isModalOpen && (
//             <UserLogoModal userEmail={userEmail} onClose={() => setIsModalOpen(false)} />
//         )}
//     </div>
//   );
// };

// export default UserLogo;


