import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../../redux/user/userSelectors";
import { updateUserInfo } from "../../redux/user/userOperations";
import sprite from "../../images/sprite.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  ErrorMessageStyled ,
} from "./SettingModal.styled";

const validationSchema = Yup.object().shape({
  
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .required("Password is required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .required("Repeat Password is required")
    .oneOf([Yup.ref("password"), null], ""),
  repetNewPassword: Yup.string()
    .required("Repeat Password is required")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

export default function SettingForm() {
  const { email, gender, username } = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepetNewPassword, setShowRepetNewPassword] = useState(false);
 

  const formik = useFormik({
    initialValues: {
      username: username,
      email: email,
      gender: gender,
      password: "",
      newPassword: "",
      repetNewPassword: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = {
        username: values.username,
        gender: values.gender,
        email: values.email,
        password: values.password,
        newPassword: values.newPassword,
      };

      dispatch(updateUserInfo(formData));
    },
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
              checked={formik.values.gender === "woman"}
              onChange={formik.handleChange}
              
            />
            <Label>Girl</Label>
          </BoxGender>
          <BoxGender>
            <GenderInput
              type="radio"
              name="gender"
              value="man"
              checked={formik.values.gender === "man"}
              onChange={formik.handleChange}
              
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
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
            
          />
          <LabelInput htmlFor="email">E-mail</LabelInput>
          <InputStyle
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            readOnly
          />
        </form>
      </ContainerInfoUser>

      <ContainerChangePass>
        <form onSubmit={formik.handleSubmit}>
          <TitlePas>Password</TitlePas>
          <LabelInput htmlFor="password">Outdated password:
          <InputStyle
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={
              formik.touched.password && formik.errors.password
                ? "input-error"
                : ""
            }
            required
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
          {formik.touched.password && (
              <ErrorMessageStyled >{formik.errors.password}</ErrorMessageStyled>
            )}
          </LabelInput>

          <LabelInput htmlFor="newPassword">New Password:
          <InputStyle
            id="newPassword"
            name="newPassword"
            type={showNewPassword ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.newPassword}
            className={
              formik.touched.newPassword  && formik.errors.newPassword 
                ? "input-error"
                : ""
            }
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
          {formik.touched.newPassword && (
              <ErrorMessageStyled >{formik.errors.newPassword }</ErrorMessageStyled>
            )}
       
          </LabelInput>

          <LabelInput htmlFor="repetNewPassword">
            Repeat new password:
          
          <InputStyle
           id="repetNewPassword"
           name="repetNewPassword"
           type={showRepetNewPassword ? "text" : "password"}
           onBlur={formik.handleBlur}
           onChange={formik.handleChange}
           value={formik.values.repetNewPassword}
           className={
             formik.touched.repetNewPassword &&
             formik.errors.repetNewPassword
               ? "input-error"
               : ""}
            
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
          {formik.touched.repetNewPassword && (
              <ErrorMessageStyled >{formik.errors.repetNewPassword }</ErrorMessageStyled>
            )}
          </LabelInput>
          <div>
            <ButtonSubmit type="submit" >Save</ButtonSubmit>
          </div>
        </form>
      </ContainerChangePass>
    </ContainerBlockSeting>
  );
}