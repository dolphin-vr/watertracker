import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { loginUser } from "../../redux/auth/auth";
import { errorUnset } from "../../redux/auth/authSlice";
import { selectError, selectIsLoading, selectIsLoggedIn } from "../../redux/auth/selectors";
import { Main, Title, Label, IconBtn, AuthBtn, AuthLink, SvgIcon, StyledForm, ErrorMsg } from "../SignUpPage/AuthPages.styled";
import { InputField } from "../../components/InputField/InputField";
import { Loader } from "../../components/Loader/Loader";
import { signinSchema } from "../../shared/utils/authValidate";

export const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // console.log('err= ', error);
    if (error===401) {
      toast.error('No such user exists or password missmatch.\n Please check your data or signup');
    } else if (error) {
      toast.error('Something went wrong.\n Please try again');
    }
    dispatch(errorUnset());
  }, [dispatch, error])

  return (
    <Main>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signinSchema}
        onSubmit={(values) => {
          dispatch(loginUser( values ));
          isLoggedIn && navigate("/main");
        }}
      >
        <StyledForm>
          <Title>Sign In</Title>
          <Label>Enter your email
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
          <AuthBtn type="submit">Sign In</AuthBtn>
          <AuthLink to="/signup">Sign Up</AuthLink>
          <AuthLink to="/remind">Forgot password?</AuthLink>
        </StyledForm>
      </Formik>
      {isLoading && <Loader />}
    </Main>
  );
};
