import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../../redux/auth/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import { todayISO } from '../../shared/api/dates';
import {AuthStyled, BackgroundStyled, Bottle, FormContainer, FormStyled, Title, Label, FieldStyled, ErrorMessageStyled, IconContainer, IconBtn, AuthBtn, AuthLink} from '../SignUpPage/AuthPages.styled';
import EyeOpenedIcon from '../../components/EyeComponentSvg/EyeOpenedIcon';
import EyeClosedIcon from '../../components/EyeComponentSvg/EyeClosedIcon';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .max(64, 'Password must be at most 64 characters')
        .required('Password is required'),
    repeatPassword: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .max(64, 'Password must be at most 64 characters')
        .required('Repeat Password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });

const SignUpPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const initialValues = {
        email: '',
        password: '',
        repeatPassword: ''
    };

    const handleRegister = async (values) => {
        try {
        const date = todayISO(new Date());
        await dispatch(
            registerUser({
                email: values.email,
                password: values.password,
                date
            })
        );
        navigate('/main');
        } catch (error) {
        console.error('Register error:', error);
        }
    };

    return (
        <AuthStyled>
            <BackgroundStyled />
            <Bottle /> 
            <FormContainer>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleRegister}
                >
                <FormStyled>
                <Title>Sign Up</Title>
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
                <IconContainer>
                    <Label>Repeat your password</Label>
                    <FieldStyled type={showPassword ? 'text' : 'password'} placeholder="Repeat password" name="repeatPassword" className="input-field" />
                    <IconBtn onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOpenedIcon /> : <EyeClosedIcon />}
                    </IconBtn>
                    <div style={{ color: '#EF5050' }}>
                        <ErrorMessageStyled name="email" className="error-message"/>
                    </div>
                </IconContainer>
                <AuthBtn type="submit">Sign Up</AuthBtn>
                <AuthLink to="/signin">Sign In</AuthLink>    
                </FormStyled>
                </Formik>
            </FormContainer>
        <Outlet />
        </AuthStyled>
    );
};

export default SignUpPage;