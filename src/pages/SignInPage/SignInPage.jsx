import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUser } from "../../redux/auth/auth";
import {  useNavigate } from "react-router-dom";
import {
  AuthStyled,
  BackgroundStyled,
  FormStyled,
  Title,
  Label,
  Input,
  ErrorMessageStyled,
  IconContainer,
  IconBtn,
  AuthBtn,
  AuthLink,
  Bottle,
  StyledSection,
} from "../SignUpPage/AuthPages.styled";
import sprite from "../../images/sprite.svg";
import { selectIsLoading, selectIsLoggedIn } from "../../redux/auth/selectors";
import { Loader } from "../../components/Loader/Loader";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .required("Password is required"),
});

export const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        loginUser({
          email: values.email,
          password: values.password,
        })
      );
      isLoggedIn && navigate("/");
    },
  });

  return isLoading ? (
    <Loader />
  ) : (
    <AuthStyled>
      <StyledSection>
        <BackgroundStyled />
        <Bottle />
        <FormStyled onSubmit={formik.handleSubmit}>
          <Title>Sign In</Title>
          <Label>Enter your email</Label>
          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={
              formik.touched.email && formik.errors.email ? "input-error" : ""
            }
            required
          />
          {formik.touched.email && (
            <ErrorMessageStyled>{formik.errors.email}</ErrorMessageStyled>
          )}

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
              className={
                formik.touched.password && formik.errors.password
                  ? "input-error"
                  : ""
              }
              required
            />
            <IconBtn
              type="button"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <>
                  <svg width="16" height="16" stroke="#407BFF">
                    <use href={sprite + "#eye"}></use>
                  </svg>
                </>
              ) : (
                <>
                  <svg width="16" height="16" stroke="#407BFF">
                    <use href={sprite + "#closedeye"}></use>
                  </svg>
                </>
              )}
//            </IconContainer>
//            <AuthBtn type="submit">Sign In</AuthBtn>
//            <AuthLink to="/signup">Sign Up</AuthLink>
//          </FormStyled>
//     </StyledSection>
            </IconBtn>
            {formik.touched.password && (
              <ErrorMessageStyled>{formik.errors.password}</ErrorMessageStyled>
            )}
          </IconContainer>
          <AuthBtn type="submit">Sign In</AuthBtn>
          <AuthLink to="/signup">Sign Up</AuthLink>
        </FormStyled>
      </StyledSection>
  //    <Outlet />
    </AuthStyled>
  );
};

export default SignInPage;