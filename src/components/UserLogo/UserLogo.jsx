import { useState } from "react";
import { useSelector } from "react-redux";
import UserLogoModal from "../UserLogoModal/UserLogoModal";
import { selectUser } from "../../redux/auth/selectors";

const UserLogo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { username, avatarURL } = useSelector(selectUser);

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {avatarURL ? (
          <>
            <img src={avatarURL} alt={username} />
            <span>{username}</span>
          </>
        ) : username ? (
          <>
            <div className="initial-avatar">
              {username.charAt(0).toUpperCase()}
            </div>
            <span>{username}</span>
          </>
        ) : (
          <div className="initial-avatar">V</div>
        )}
      </button>

      {isModalOpen && (
        <UserLogoModal
          userName={username}
          userAvatar={avatarURL}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UserLogo;
