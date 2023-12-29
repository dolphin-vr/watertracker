import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../../redux/auth/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; //перевірка для токену, видалити потім цей рядок, він не потрібен
import { selectToken } from '../../redux/auth/selectors'; //перевірка для токену, видалити потім цей рядок, він не потрібен

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').max(64, 'Password must be at most 64 characters').required('Password is required'),
});

export const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const tokenInRedux = useSelector((state) => selectToken(state)); //перевірка для токену, видалити потім цей рядок, він не потрібен
  console.log('Token in Redux state:', tokenInRedux); //перевірка для токену, видалити потім цей рядок, він не потрібен 

  const tokenInLocalStorage = localStorage.getItem('persist:auth'); //перевірка для токену, видалити потім цей рядок, він не потрібен 
  console.log('Token in localStorage:', tokenInLocalStorage); //перевірка для токену, видалити потім цей рядок, він не потрібен

  return (
    <div>
      <h1>Sign In</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
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
          <button type="submit">Sign In</button>
        </Form>
      </Formik>
      <Link to="/signup">Sign Up</Link>
      <Outlet />
    </div>
  );
};

export default SignInPage;
