import { useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { resetPasswd } from "../../redux/auth/auth";
import { selectIsLoading, selectStatus } from "../../redux/auth/selectors";
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
  Bottle,
  StyledSvg,
} from "../SignUpPage/AuthPages.styled";
import { Icon } from "../../components/Icon/Icon";
import { Loader } from "../../components/Loader/Loader";
import { signupSchema } from "../../shared/utils/authValidate";

export const PassResetPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const status = useSelector(selectStatus);
  const {token} =useParams();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "", repeatPassword: "" },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      dispatch(
        resetPasswd({
          email: values.email,
          password: values.password,
          token,
        })
      );
      console.log('selectStatus from submit reset= ', status);
      // isLoggedIn && navigate("/signin");
    },
  });

      console.log('selectStatus reset= ', status);
  return isLoading ? (
    <Loader />
  ) : (
    <Main>
    <FormStyled onSubmit={formik.handleSubmit}>
      <Title>Password reset form</Title>
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

      <Label>Enter new password
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

      <Label>Repeat new password
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
      <AuthBtn type="submit">Reset password</AuthBtn>
      <AuthLink to="/signin">Sign In</AuthLink>
    </FormStyled>
    <Bottle />
    </Main>
  );
};
