import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { loginUser } from "../../redux/auth/auth";
import { useNavigate } from "react-router-dom";
import {
  Main,
  FormStyled,
  Title,
  Label,
  Input,
  ErrorMessageStyled,
  IconBtn,
  AuthBtn,
  AuthLink,
  StyledSvg,
} from "../SignUpPage/AuthPages.styled";
import { selectIsLoading, selectIsLoggedIn } from "../../redux/auth/selectors";
import { Loader } from "../../components/Loader/Loader";
import { Icon } from "../../components/Icon/Icon";
import { signinSchema } from "../../shared/utils/authValidate";

export const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const [showPassword, setShowPassword] = useState(false);
  console.log('isLoggedIn begin = ', isLoggedIn)

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: signinSchema,
    onSubmit: (values) => {
      dispatch(
        loginUser({
          email: values.email,
          password: values.password,
        })
      );
  console.log('isLoggedIn from submit = ', isLoggedIn)
      isLoggedIn && navigate("/main");
    },
  });

  return isLoading ? (
    <Loader />
  ) : (
    <Main>
        <FormStyled onSubmit={formik.handleSubmit}>
          <Title>Sign In</Title>
          <Label>Enter your email
          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={ formik.touched.email && formik.errors.email ? "input-error" : "" }
            required
          />
          {formik.touched.email && (
            <ErrorMessageStyled>{formik.errors.email}</ErrorMessageStyled>
          )}</Label>

          <Label>Enter your password
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={(e) => { formik.handleChange(e) }}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={ formik.touched.password && formik.errors.password ? "input-error" : "" }
              required
            />
            <IconBtn type="button" onClick={() => { setShowPassword(!showPassword); }} >
              {showPassword ? ( <StyledSvg><Icon tag={"eye"} /></StyledSvg> ) : (  <StyledSvg><Icon tag={"closedeye"} /></StyledSvg> )}
            </IconBtn>
            {formik.touched.password && (
              <ErrorMessageStyled>{formik.errors.password}</ErrorMessageStyled>
            )}</Label>
          <AuthBtn type="submit">Sign In</AuthBtn>
          <AuthLink to="/signup">Sign Up</AuthLink>
          <AuthLink to="/remind">Forgot password?</AuthLink>
        </FormStyled>
    </Main>
  );
};

