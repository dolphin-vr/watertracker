// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectUserName, selectUserAvatar } from '../../redux/user/userSelectors';
// import UserLogoModal from '../UserLogoModal/UserLogoModal';

// const UserLogo = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const userName = useSelector(selectUserName);
//     const userAvatar = useSelector(selectUserAvatar);

//     const handleButtonClick = () => {
//         setIsModalOpen(!isModalOpen);
//     };

//     return (
//     <div>
//         <button onClick={handleButtonClick}>
//             {userAvatar ? (
//             <>
//                 <img src={userAvatar} alt={userName} />
//                 <span>{userName}</span>
//             </>
//             ) : userName ? (
//             <>
//                 <div className="initial-avatar">{userName.charAt(0).toUpperCase()}</div>
//                 <span>{userName}</span>
//             </>
//             ) : (
//             <div className="initial-avatar">V</div>
//             )}
//         </button>

//         {isModalOpen && (
//             <UserLogoModal userName={userName} userAvatar={userAvatar} onClose={() => setIsModalOpen(false)} />
//         )}
//     </div>
//     );
// };

// export default UserLogo;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import avatar from '../../images/avatar.png';
import { selectUserEmail } from '../../redux/user/userSelectors';
import { UserLogoWrapper } from './UserLogo.styled';

const UserLogo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const userEmail = useSelector(selectUserEmail);

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

return (
    <div>
        <button onClick={handleButtonClick}>
            <UserLogoWrapper className="initial-avatar">
                <p>{userEmail}</p>
                <img src={avatar} alt={avatar} width={26} height={26}/>
            </UserLogoWrapper>
        </button>

        {isModalOpen && (
            <UserLogoModal userEmail={userEmail} onClose={() => setIsModalOpen(false)} />
        )}
    </div>
  );
};

export default UserLogo;


