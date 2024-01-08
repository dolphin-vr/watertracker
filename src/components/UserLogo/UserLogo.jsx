//* Мій старий код з використання react-modal. Функціонал працює, але позиціонування ні.*//

// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectUserName, selectUserAvatar } from '../../redux/user/userSelectors';
// import UserLogoModal from '../UserLogoModal/UserLogoModal';
// import { UserAvatarIMG, UserContainer, UserBtn, UserName, UserAppCase, UserLetter, UserNameV } from './UserLogo.styled';
// import sprite from "../../images/sprite.svg";

// const UserLogo = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const userName = useSelector(selectUserName);
//   const userAvatar = useSelector(selectUserAvatar);

//   const handleButtonClick = () => {
//       setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div>
//       <UserBtn onClick={handleButtonClick}>
//           {userAvatar ? (
//           <>
//             <UserContainer>
//               <UserName>{userName}</UserName>
//               <UserAvatarIMG src={userAvatar} alt={userName} />
//               <svg width="16" height="16">
//                 <use href={sprite + "#arrowdown"}></use>
//               </svg>
//             </UserContainer>
//           </>
//           ) : userName ? (
//           <>
//             <UserContainer>
//               <UserName>{userName}</UserName>
//                 <UserAppCase>
//                   <UserLetter>
//                     {userName.charAt(0).toUpperCase()}
//                   </UserLetter>
//                 </UserAppCase>
//               <svg width="16" height="16">
//                 <use href={sprite + "#arrowdown"}></use>
//               </svg>
//             </UserContainer>
//           </>
//           ) : (
//             <UserContainer>
//               <UserAppCase>
//                 <UserNameV>V</UserNameV>
//               </UserAppCase>
//               <svg width="16" height="16">
//                 <use href={sprite + "#arrowdown"}></use>
//               </svg>
//             </UserContainer>
//           )}
//       </UserBtn>

//       {isModalOpen && (
//           <UserLogoModal userName={userName} userAvatar={userAvatar} onClose={() => setIsModalOpen(false)} />
//       )}
//     </div>
//   );
// };

// export default UserLogo;



//* Новий код, такий підхід не закриває назад модалку UserLogoModal, але інший функціонал працює і позиціонування норм.*/

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserName, selectUserAvatar } from '../../redux/user/userSelectors';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import { UserAvatarIMG, UserContainer, UserWrapper, UserName, UserAppCase, UserLetter, UserNameV } from './UserLogo.styled';
import sprite from "../../images/sprite.svg";

const UserLogo = () => {
  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openModal = () => {
    setIsPopUpOpen(true);
  };

  const closeModal = () => {
    setIsPopUpOpen(false);
  };


  return (
    <div>
      <UserWrapper onClick={() => openModal()}>
        {isPopUpOpen && <UserLogoModal onClose={closeModal} />}
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
      </UserWrapper>
    </div>
  );
};

export default UserLogo;
