import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../../redux/auth/auth';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { todayISO } from '../../shared/api/dates';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').max(64, 'Password must be at most 64 characters').required('Password is required'),
    repeatPassword: Yup.string().min(8, 'Password must be at least 8 characters').max(64, 'Password must be at most 64 characters').required('Repeat Password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

function SignUpPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
        repeatPassword: '',
    };

    const handleRegister = async (values) => {
        try {
        const date = todayISO(new Date());
        await dispatch(
            registerUser({
            email: values.email,
            password: values.password,
            date,
            })
        );

        navigate('/main');
        } catch (error) {
        console.error('Registration error:', error);
        }
    };

    return (
        <div>
        <h1>Sign Up</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
        >
            <Form autoComplete="off">
            <label>
                Enter your email
                <Field type="email" name="email" placeholder="E-mail" />
                <ErrorMessage name="email" component="div" />
            </label>
            <label>
                Enter your password
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" />
            </label>
            <label>
                Repeat your password
                <Field type="password" name="repeatPassword" placeholder="Repeat your password" />
                <ErrorMessage name="repeatPassword" component="div" />
            </label>
            <button type="submit">Sign Up</button>
            </Form>
        </Formik>
        <Link to="/signin">Sign In</Link>
        <Outlet />
        </div>
    );
}

export default SignUpPage;


