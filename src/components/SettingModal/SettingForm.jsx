import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../../redux/user/userSelectors";
import { updateUserInfo } from "../../redux/user/userOperations";
import sprite from "../../images/sprite.svg";
import {
  BoxGender,
  ContainerGender,
  ContainerBlockSeting,
  TitleH5,
  ContainerInfoUser,
  ContainerChangePass,
  LabelInput,
  InputStyle,
  ButtonSubmit,
  GenderInput,
  Label,
  TitlePas,
  IconBtn,
} from "./SettingModal.styled";

export default function SettingForm() {
  const { email, gender, username } = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepetNewPassword, setShowRepetNewPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: username,
    email: email,
    gender: gender,
    password: "",
    newPassword: "",
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleToggleRepetNewPassword = () => {
    setShowRepetNewPassword(!showRepetNewPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo(formData));
  };

  return (
    <ContainerBlockSeting>
      <ContainerInfoUser>
        <TitleH5>Your gender identity</TitleH5>
        <ContainerGender>
          <BoxGender>
            <GenderInput
              type="radio"
              name="gender"
              value="woman"
              checked={formData.gender === "woman"}
              onChange={handleChange}
            />
            <Label>Girl</Label>
          </BoxGender>
          <BoxGender>
            <GenderInput
              type="radio"
              name="gender"
              value="man"
              checked={formData.gender === "man"}
              onChange={handleChange}
            />
            <Label>Man</Label>
          </BoxGender>
        </ContainerGender>

        <form>
          <LabelInput htmlFor="userName">Your name</LabelInput>
          <InputStyle
            id="username"
            name="username"
            type="text"
            onChange={handleChange}
            value={formData.username}
          />
          <LabelInput htmlFor="email">E-mail</LabelInput>
          <InputStyle
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            readOnly
          />
        </form>
      </ContainerInfoUser>

      <ContainerChangePass>
        <form onSubmit={handleSubmit}>
          <TitlePas>Password</TitlePas>
          <LabelInput htmlFor="password">Outdated password:
          <InputStyle
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={handleChange}
            value={formData.password}
          />
          <IconBtn onClick={handleTogglePassword}>
            {showPassword ? (
              <svg height="24" width="24">
                <use href={sprite + "#eye"}></use>
              </svg>
            ) : (
              <svg height="24" width="24">
                <use href={sprite + "#closedeye"}></use>
              </svg>
            )}
          </IconBtn>
          </LabelInput>

          <LabelInput htmlFor="newPassword">New Password:
          <InputStyle
            id="newPassword"
            name="newPassword"
            type={showNewPassword ? "text" : "password"}
            onChange={handleChange}
            value={formData.newPassword}
          />
           <IconBtn onClick={handleToggleNewPassword}>
            {showNewPassword ? (
              <svg height="24" width="24">
                <use href={sprite + "#eye"}></use>
              </svg>
            ) : (
              <svg height="24" width="24">
                <use href={sprite + "#closedeye"}></use>
              </svg>
            )}
          </IconBtn>
          </LabelInput>

          <LabelInput htmlFor="repetNewPassword">
            Repeat new password:
          
          <InputStyle
            id="repetNewPassword"
            name="repetNewPassword"
            type={showRepetNewPassword ? "text" : "password"}
            
          />
           <IconBtn onClick={handleToggleRepetNewPassword}>
            {showRepetNewPassword? (
              <svg height="24" width="24">
                <use href={sprite + "#eye"}></use>
              </svg>
            ) : (
              <svg height="24" width="24">
                <use href={sprite + "#closedeye"}></use>
              </svg>
            )}
          </IconBtn>
          </LabelInput>
          <div>
            <ButtonSubmit type="submit">Save</ButtonSubmit>
          </div>
        </form>
      </ContainerChangePass>
    </ContainerBlockSeting>
  );
}