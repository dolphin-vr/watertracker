import { useState, useEffect, useRef  } from 'react';
import { useSelector } from 'react-redux';
import { selectUserName, selectUserAvatar, selectUserEmail } from '../../redux/user/userSelectors';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import { UserAvatarIMG, UserContainer, UserWrapper, UserName, UserAppCase, UserLetter, UserNameV } from './UserLogo.styled';
import sprite from "../../images/sprite.svg";

const UserLogo = () => {
  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);
  const userEmail = useSelector(selectUserEmail);

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const userLogoRef = useRef(null);

  const toggleModal = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  useEffect(() => {
    const handleClickOnWindow = (e) => {
      if (isPopUpOpen && userLogoRef.current && !userLogoRef.current.contains(e.target)) {
        setIsPopUpOpen(false);
      }
    };
    window.addEventListener("click", handleClickOnWindow);
    return () => {
      window.removeEventListener("click", handleClickOnWindow);
    };
  }, [isPopUpOpen]);

  return (
    <div>
      <UserWrapper onClick={() => toggleModal()} ref={userLogoRef}>
        <UserLogoModal isOpen={isPopUpOpen} onClose={toggleModal} />
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
              <p>{userEmail.split('@')[0]}</p>
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
