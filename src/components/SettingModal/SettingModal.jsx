import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAvatar } from "../../redux/user/userOperations";
import { selectUserAvatar } from "../../redux/user/userSelectors";
import {
  Container,
  TitleContainer,
  Avatar,
  ContainerAvatar,
  InputImg,
  LinkImgUpload,
  TitleH5,
  Backdrop,
  CloseBtn,
} from "./SettingModal.styled";
import sprite from "../../images/sprite.svg";

import SettingForm from "./SettingForm";

Modal.setAppElement("#root");
const SettingModal = ({ onClose }) => {
  const avatarURL = useSelector(selectUserAvatar);
  const fileInputRef = React.useRef();
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleUpload(file);
    }
  };

  const handleUpload = (file) => {
    const formData = new FormData();
    formData.append("avatar", file);
    dispatch(updateUserAvatar(formData));
  };

  const handleLinkClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Modal isOpen={true} onRequestClose={onClose} contentLabel="SettingModal">
    <Backdrop>
      <Container>
        <TitleContainer>
          <h3>Setting</h3>
        </TitleContainer>
        <CloseBtn type="button"onClick={onClose}>
          <svg>
           <use href={sprite + "#modalclose"}></use>
          </svg>
          </CloseBtn>
        <TitleH5>Your photo</TitleH5>
        <ContainerAvatar>
          <Avatar
            src={avatarURL}
            alt="Img_Avatar"
            width="80"
            height="80"
          ></Avatar>
          <InputImg
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <LinkImgUpload onClick={handleLinkClick}>
            Upload a photo
          </LinkImgUpload>
        </ContainerAvatar>
        <SettingForm />
      </Container>
      </Backdrop>
    </Modal>
  );
};

export default SettingModal;
