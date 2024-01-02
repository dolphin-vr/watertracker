import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
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
  const { email, gender } = useSelector(selectUser);

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: email,
      gender: gender,
      outdatedPassword: "",
      password: "",
      newPassword: "",
      repetNewPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <ContainerBlockSeting>
        <ContainerInfoUser>
          <TitleH5>Your gender identity</TitleH5>
          <ContainerGender>
            <BoxGender>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formik.values.gender === "female"}
                onChange={formik.handleChange}
              />
              <label>Girl</label>
            </BoxGender>
            <BoxGender>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formik.values.gender === "male"}
                onChange={formik.handleChange}
              />
              <label>Man</label>
            </BoxGender>
          </ContainerGender>

          <form onSubmit={formik.handleSubmit}>
            <LabelInput htmlFor="userName">Your name</LabelInput>
            <InputStyle
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
            <LabelInput htmlFor="email">E-mail</LabelInput>
            <InputStyle
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={email}
            />
          </form>
        </ContainerInfoUser>
        <ContainerChangePass>
          <form onSubmit={formik.handleSubmit}>
            <h3>Password</h3>
            <LabelInput htmlFor="outdatedPassword">
              Outdated password:
            </LabelInput>
            <InputStyle
              id="outdatedPassword"
              name="outdatedPassword"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.outdatedPassword}
            />

            <LabelInput htmlFor="newPassword">New Password:</LabelInput>
            <InputStyle
              id="newPassword"
              name="newPassword"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.newPassword}
            />

            <LabelInput htmlFor="repetNewPassword">
              Repeat new password:
            </LabelInput>
            <InputStyle
              id="repetNewPassword"
              name="repetNewPassword"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.repetNewPassword}
            />

            <div>
              <ButtonSubmit type="submit">Save</ButtonSubmit>
            </div>
          </form>
        </ContainerChangePass>
      </ContainerBlockSeting>
    </>
  );
}