import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUser } from "../../redux/auth/auth";
import {  useNavigate } from "react-router-dom";
import {
  AuthStyled,
  // BackgroundStyled,
  FormStyled,
  Title,
  Label,
  Input,
  ErrorMessageStyled,
  AuthBtn,
  AuthLink,
  // Bottle,
  StyledSection,
} from "../SignUpPage/AuthPages.styled";
import { selectIsLoading, selectIsLoggedIn } from "../../redux/auth/selectors";
import { Loader } from "../../components/Loader/Loader";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
});

export const PassResetPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);

  const formik = useFormik({
    initialValues: { email: "" },
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
        {/* <BackgroundStyled />
        <Bottle /> */}
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

          <AuthBtn type="submit">Send email</AuthBtn>
          <AuthLink to="/signin">Sign In</AuthLink>
        </FormStyled>
      </StyledSection>
    </AuthStyled>
  );
};
