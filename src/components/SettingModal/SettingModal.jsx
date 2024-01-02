import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAvatar } from "../../redux/user/userOperations";
import {selectUser} from"../../redux/auth/selectors";
import {
  Container,
  TitleContainer,
  Avatar,
  ContainerAvatar,
  InputImg,
  LinkImgUpload,
  TitleH5,
} from "./SettingModal.syled";

import SettingForm from "./SettingForm";


const SettingModal = () => {
  
  const { avatarURL } = useSelector(selectUser);
  const fileInputRef = React.useRef();
  const dispatch = useDispatch();

  // Function select file and write to State
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleUpload(file);
    }
  };
  // Function chek if you select file and add to Api
  const handleUpload = (file) => {
    const formData = new FormData();
    formData.append("avatarURL", file);
    dispatch(updateUserAvatar(formData));
  };
  // Function open to function select file
  const handleLinkClick = () => {
    fileInputRef.current.click();
  };
  return (
    <Container>
      <TitleContainer>
        <h3>Setting</h3>
        
      </TitleContainer>
      <TitleH5>Your photo</TitleH5>
      <ContainerAvatar>
        <Avatar
          src={avatarURL}
          alt="Img_Avatar"
          width="80"
          height="80"
        ></Avatar>
        <InputImg type="file" ref={fileInputRef} onChange={handleFileChange} />
        <LinkImgUpload onClick={handleLinkClick}>Upload a photo</LinkImgUpload>
      </ContainerAvatar>
      <SettingForm></SettingForm>
    </Container>
  );
};

export default SettingModal;