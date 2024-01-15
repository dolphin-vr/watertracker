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
  Title,
  ModalStyled,
  UploadSvg,
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
    <ModalStyled
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="SettingModal"
      overlayClassName="overlay"
    >
      <Backdrop onClick={onClose} />
      <Container>
        <TitleContainer>
          <Title>Setting</Title>
        </TitleContainer>
        <CloseBtn type="button" onClick={onClose}>
          <svg>
            <use href={sprite + "#modalclose"}></use>
          </svg>
        </CloseBtn>
        <TitleH5>Your photo</TitleH5>
        <ContainerAvatar>
          <Avatar src={avatarURL} alt="" width="80" height="80"></Avatar>
          <InputImg
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <LinkImgUpload onClick={handleLinkClick}>
            <UploadSvg>
              <use href={sprite + "#upload"}></use>
            </UploadSvg>
            Upload a photo
          </LinkImgUpload>
        </ContainerAvatar>
        <SettingForm close={onClose} />
      </Container>
    </ModalStyled>
  );
};

export default SettingModal;
