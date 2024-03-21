import { useState, useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { resetPasswd } from "../../redux/auth/auth";
import { errorUnset, statusUnset } from "../../redux/auth/authSlice";
import { selectError, selectIsLoading, selectStatus } from "../../redux/auth/selectors";
import { Main, Title, Label, IconBtn, AuthBtn, AuthLink, SvgIcon, StyledForm, ErrorMsg } from "../SignUpPage/AuthPages.styled";
import { InputField } from "../../components/InputField/InputField";
import { Loader } from "../../components/Loader/Loader";
import { signupSchema } from "../../shared/utils/authValidate";

export const PassResetPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const {token} =useParams();
  const [showPassword, setShowPassword] = useState(false);
  
  useEffect(() => {
    if (status === 200) {
      dispatch(statusUnset());
      toast.success('Password was reset successfuly.\n Please sign in.', { id: 'toasterId' });
      navigate("/signin");
    }
    if (error) {
      toast.error('Something went wrong.\n Please try again', {id: 'toasterId'});
      dispatch(errorUnset());
    }
  }, [status, error, dispatch, navigate]);
  
  return (
    <Main>
      <Formik
        initialValues={{ email: "", password: "", repeatPassword: "" }}
        validationSchema={signupSchema}
        onSubmit={(values) => {
          dispatch( resetPasswd({
            email: values.email,
            password: values.password,
            token,
          }));
          toast.loading('Please wait...', {id: 'toasterId'});
        }}
      >
        <StyledForm>
          <Title>Password reset form</Title>
          <Label>
            Enter your email
            <InputField type="email" placeholder="E-mail" name="email" />
            <ErrorMsg name="email" component="span" />
          </Label>
          <Label>Enter your password
            <InputField type={showPassword ? "text" : "password"} placeholder="Password" name="password" />
            <IconBtn type="button" onClick={() => { setShowPassword(!showPassword); }} >
              <SvgIcon tag={showPassword ? "eye" : "closedeye"} />
            </IconBtn>
            <ErrorMsg name="password" component="span" />
          </Label>
          <Label>Repeat your password
            <InputField type={showPassword ? "text" : "password"} placeholder="Repeat password" name="repeatPassword" />
            <IconBtn type="button" onClick={() => { setShowPassword(!showPassword); }} >
              <SvgIcon tag={showPassword ? "eye" : "closedeye"} />
            </IconBtn>
            <ErrorMsg name="repeatPassword" component="span" />
          </Label>
          <AuthBtn type="submit">Reset password</AuthBtn>
          <AuthLink to="/signin">Sign In</AuthLink>
        </StyledForm>
      </Formik>
			{isLoading && <Loader />}
    </Main>
  );
};
