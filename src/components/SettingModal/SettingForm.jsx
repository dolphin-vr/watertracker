import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../../redux/user/userSelectors";
import { updateUserInfo } from "../../redux/user/userOperations";
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
} from "./SettingModal.styled";

export default function SettingForm() {
  const { email, gender, username } = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: username,
    email: email,
    gender: gender,
    // outdatedPassword: "",
    // newPassword: "",
    // repetNewPassword: "",
  });

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
            <input
              type="radio"
              name="gender"
              value="woman"
              checked={formData.gender === "woman"}
              onChange={handleChange}
            />
            <label>Girl</label>
          </BoxGender>
          <BoxGender>
            <input
              type="radio"
              name="gender"
              value="man"
              checked={formData.gender === "man"}
              onChange={handleChange}
            />
            <label>Man</label>
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
          <h3>Password</h3>
          <LabelInput htmlFor="outdatedPassword">Outdated password:</LabelInput>
          <InputStyle
            id="outdatedPassword"
            name="outdatedPassword"
            type="password"
            onChange={handleChange}
            value={formData.outdatedPassword}
          />

          <LabelInput htmlFor="newPassword">New Password:</LabelInput>
          <InputStyle
            id="newPassword"
            name="newPassword"
            type="password"
            onChange={handleChange}
            value={formData.newPassword}
          />

          <LabelInput htmlFor="repetNewPassword">
            Repeat new password:
          </LabelInput>
          <InputStyle
            id="repetNewPassword"
            name="repetNewPassword"
            type="password"
            onChange={handleChange}
            value={formData.repetNewPassword}
          />

          <div>
            <ButtonSubmit type="submit">Save</ButtonSubmit>
          </div>
        </form>
      </ContainerChangePass>
    </ContainerBlockSeting>
  );
}
