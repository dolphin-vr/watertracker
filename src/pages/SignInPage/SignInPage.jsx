import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../../redux/auth/auth';
import { Outlet, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux'; //перевірка для токену, видалити потім цей рядок, він не потрібен
// import { selectToken } from '../../redux/auth/selectors'; //перевірка для токену, видалити потім цей рядок, він не потрібен
import {AuthStyled, BackgroundStyled, Bottle, FormContainer, FormStyled, Title, Label, FieldStyled, ErrorMessageStyled, IconContainer, IconBtn, AuthBtn, AuthLink} from '../SignUpPage/AuthPages.styled';
import EyeClosedIcon from '../../components/EyeComponentSvg/EyeClosedIcon';
import EyeOpenedIcon from '../../components/EyeComponentSvg/EyeOpenedIcon';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').max(64, 'Password must be at most 64 characters').required('Password is required'),
});

export const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
    };

  const handleLogin = async (values) => {
          try {
          await dispatch(
              loginUser({
                  email: values.email,
                  password: values.password,
              })
          );
          navigate('/main');
          } catch (error) {
          console.error('Login error:', error);
          }
      };

  // const tokenInRedux = useSelector((state) => selectToken(state)); //перевірка для токену, видалити потім цей рядок, він не потрібен
  // console.log('Token in Redux state:', tokenInRedux); //перевірка для токену, видалити потім цей рядок, він не потрібен 

  // const tokenInLocalStorage = localStorage.getItem('persist:auth'); //перевірка для токену, видалити потім цей рядок, він не потрібен 
  // console.log('Token in localStorage:', tokenInLocalStorage); //перевірка для токену, видалити потім цей рядок, він не потрібен
  
  return (
    <AuthStyled>
      <BackgroundStyled />
      <Bottle /> 
      <FormContainer>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
        >
        <FormStyled>
        <Title>Sign In</Title>
        <div>
            <Label>Enter your email</Label>
            <FieldStyled type="email" name="email" placeholder="E-mail" className="input-field" />
            <div style={{ color: '#EF5050' }}>
                <ErrorMessageStyled name="email" className="error-message"/>
            </div>
        </div>
        <IconContainer>
            <Label>Enter your password</Label>
            <FieldStyled type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" className="input-field" />
            <IconBtn onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOpenedIcon /> : <EyeClosedIcon />}
            </IconBtn>
            <div style={{ color: '#EF5050' }}>
                <ErrorMessageStyled name="email" className="error-message"/>
            </div>
        </IconContainer>    
        <AuthBtn type="submit">Sign In</AuthBtn>
        <AuthLink to="/signup">Sign Up</AuthLink>    
        </FormStyled>
        </Formik>
      </FormContainer>
    <Outlet />
    </AuthStyled>
  );
};
  
export default SignInPage;