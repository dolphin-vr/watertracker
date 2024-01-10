import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../../redux/user/userSelectors";
import { updateUserInfo } from "../../redux/user/userOperations";
import sprite from "../../images/sprite.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

import toast from 'react-hot-toast';

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
  MainForm,
} from "./SettingModal.styled";


const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters"),
  repetNewPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters"),
});

export default function SettingForm({close}) {
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
    
    onSubmit: async (values) => {
      let formData = {
        username: values.username,
        gender: values.gender,
        email: values.email,
        password: values.password,
        newPassword: values.newPassword,
      };
     
      if (
        (values.password !== "" && values.newPassword === "")|| 
        (values.password === "" && values.newPassword !== "")||
        values.newPassword !== values.repetNewPassword
      ) {
        toast("To change the password, fill in all password fields correctly", {
          duration: 4000,
          position: 'center',
          style: {
            border: "2px solid #407BFF",
            background: "#ECF2FF",
             },
             
        });
        return;
      }
      if (values.password === "") {
        formData = {
          username: values.username,
          gender: values.gender,
          email: values.email,
        };
      }
      try {
        await dispatch(updateUserInfo(formData));
        // Закриваємо модальне вікно після успішного діспетчу
        close();
      } catch (error) {
        // Обробка помилки диспетчу, якщо потрібно
      }
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
      
      <MainForm onSubmit={formik.handleSubmit}>
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
            
          />
        
      </ContainerInfoUser>

      <ContainerChangePass>
        
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
          
          />
          <IconBtn type="button" onClick={handleTogglePassword}>
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
           <IconBtn type="button" onClick={handleToggleNewPassword}>
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
           <IconBtn  type="button" onClick={handleToggleRepetNewPassword}>
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
          
            <ButtonSubmit type="submit" >Save</ButtonSubmit>
            
          
       
        
      </ContainerChangePass>
    </MainForm>
    </ContainerBlockSeting>
  );
}