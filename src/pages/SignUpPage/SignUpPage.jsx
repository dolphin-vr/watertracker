import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { registerUser } from "../../redux/auth/auth";
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
} from "./AuthPages.styled";
import { Icon } from "../../components/Icon/Icon";
import { selectIsLoading, selectIsLoggedIn } from "../../redux/auth/selectors";
import { Loader } from "../../components/Loader/Loader";
import { signupSchema } from "../../shared/utils/authValidate";

export const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "", repeatPassword: "" },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      const formData = {
        email: values.email,
        password: values.password,
      };
      dispatch(registerUser(formData));
      isLoggedIn && navigate("/main");
    },
  });

  return isLoading ? (
    <Loader />
  ) : (
    <Main>
        <FormStyled onSubmit={formik.handleSubmit}>
          <Title>Sign Up</Title>
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
            <IconBtn type="button" onClick={() => { setShowPassword(!showPassword) }}>
              {showPassword ? ( <StyledSvg><Icon tag={"eye"} /></StyledSvg> ) : (  <StyledSvg><Icon tag={"closedeye"} /></StyledSvg> )}
            </IconBtn>
            {formik.touched.password && (
              <ErrorMessageStyled>{formik.errors.password}</ErrorMessageStyled>
            )}</Label>

          <Label>Repeat your password
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Repeat password"
              name="repeatPassword"
              onChange={(e) => { formik.handleChange(e) }}
              onBlur={formik.handleBlur}
              value={formik.values.repeatPassword}
              className={ formik.touched.repeatPassword && formik.errors.repeatPassword ? "input-error" : "" }
              required
            />
            <IconBtn type="button" onClick={() => { setShowPassword(!showPassword); }} >
              {showPassword ? ( <StyledSvg><Icon tag={"eye"} /></StyledSvg> ) : (  <StyledSvg><Icon tag={"closedeye"} /></StyledSvg> )}
            </IconBtn>
            {formik.touched.repeatPassword && (
              <ErrorMessageStyled>{formik.errors.repeatPassword}</ErrorMessageStyled>
            )}</Label>
          <AuthBtn type="submit">Sign Up</AuthBtn>
          <AuthLink to="/signin">Sign In</AuthLink>
        </FormStyled>
    </Main>
  );
};
