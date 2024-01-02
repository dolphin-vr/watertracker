import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../../redux/auth/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import {AuthStyled, BackgroundStyled, FormContainer, FormStyled, Title, Label, Input, ErrorMessageStyled, IconContainer, IconBtn, AuthBtn, AuthLink, Bottle} from './AuthPages.styled';
import EyeClosedIcon from '../../components/EyeComponentSvg/EyeClosedIcon';
import EyeOpenedIcon from '../../components/EyeComponentSvg/EyeOpenedIcon';
// import {todayISO} from '../../shared/api/dates';
import currentDate from '../../services/currentDate';

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

export const SignUpPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: { email: '', password: '', repeatPassword: ''},
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                // const date = todayISO(new Date());
                const date = currentDate;
                
                const formData = {
                    email: values.email,
                    password: values.password,
                    date,
                };

            // console.log('Data sent to the server:', formData); 

            // const response = 
            await dispatch(registerUser(formData));
            // console.log('Server response:', response);

            navigate('/');
            } catch (error) {
            console.error('Registration error:', error);
            }
        },
    });

    return (
        <AuthStyled>
            <BackgroundStyled/>
            <Bottle/>  
            <FormContainer>
                <FormStyled onSubmit={formik.handleSubmit}>
                    <Title>Sign Up</Title>
                    <Label>Enter your email</Label>
                    <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={formik.touched.email && formik.errors.email ? "input-error" : ""} required/>
                    {formik.touched.email && (<ErrorMessageStyled>{formik.errors.email}</ErrorMessageStyled>)}

                    <Label>Enter your password</Label>
                    <IconContainer>
                        <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        onChange={(e) => {
                        formik.handleChange(e);
                        }}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className={formik.touched.password && formik.errors.password ? "input-error" : ""} required />
                        <IconBtn onClick={() => {setShowPassword(!showPassword);}}>
                        {showPassword ? (
                        <>
                            <EyeOpenedIcon />
                        </>
                        ) : (
                        <>
                            <EyeClosedIcon/>
                        </>
                        )}
                        </IconBtn>
                        {formik.touched.password && (<ErrorMessageStyled>{formik.errors.password}</ErrorMessageStyled> )}
                    </IconContainer>
                    
                    <Label>Repeat your password</Label>
                    <IconContainer>
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Repeat password"
                            name="repeatPassword"
                            onChange={(e) => {
                            formik.handleChange(e);
                            }}
                            onBlur={formik.handleBlur}
                            value={formik.values.repeatPassword}
                            className={formik.touched.repeatPassword && formik.errors.repeatPassword ? "input-error" : ""} required />
                            <IconBtn onClick={() => {setShowPassword(!showPassword);}}>
                                {showPassword ? (
                                <>
                                    <EyeOpenedIcon />
                                </>
                                ) : (
                                <>
                                    <EyeClosedIcon/>
                                </>
                                )}
                            </IconBtn>
                            {formik.touched.repeatPassword && ( <ErrorMessageStyled>{formik.errors.repeatPassword}</ErrorMessageStyled> )}
                    </IconContainer>
                    <AuthBtn type="submit">Sign Up</AuthBtn>
                    <AuthLink to ="/signin">Sign In</AuthLink>
                </FormStyled>
            </FormContainer>
        <Outlet />
        </AuthStyled> 
    );
};

export default SignUpPage;