import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { registerUser } from "../../redux/auth/auth";
import { errorUnset } from "../../redux/auth/authSlice";
import { selectError, selectIsLoading, selectIsLoggedIn } from "../../redux/auth/selectors";
import { Main, Title, Label, IconBtn, AuthBtn, AuthLink, StyledForm, ErrorMsg, SvgIcon, } from "./AuthPages.styled";
import { InputField } from "../../components/InputField/InputField";
import { Loader } from "../../components/Loader/Loader";
import { signupSchema } from "../../shared/utils/authValidate";

export const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(()=>{
    if (error===409) {
      toast.error('This email address is not available.\n Choose a different one.');
    } else if (error) {
      toast.error('Something went wrong.\n Please try again');
    }
    dispatch(errorUnset());
  }, [dispatch, error])

  return (
    <Main>
      <Formik
        initialValues={{ email: "", password: "", repeatPassword: "" }}
        validationSchema={signupSchema}
        onSubmit={(values) => {
          dispatch(registerUser( values ));
          isLoggedIn && navigate("/main");
        }}
      >
        <StyledForm>
          <Title>Sign Up</Title>
          <Label>Enter your email
            <InputField type="email" placeholder="E-mail" name="email" />
            <ErrorMsg name="email" component="span" />
          </Label>
          <Label>Enter your password
            <InputField type={showPassword ? "text" : "password"} placeholder="Password" name="password" />
            <IconBtn type="button" onClick={() => { setShowPassword(!showPassword); }} >
              <SvgIcon tag={showPassword ? "eye" : "closedeye"} />
              {/* {showPassword ? ( <StyledSvg><Icon tag={"eye"} /></StyledSvg> ) : (  <StyledSvg><Icon tag={"closedeye"} /></StyledSvg> )} */}
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
          <AuthBtn type="submit">Sign Up</AuthBtn>
          <AuthLink to="/signin">Sign In</AuthLink>
        </StyledForm>
      </Formik>
      {isLoading && <Loader />}
    </Main>
  );
};
