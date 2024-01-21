import { useDispatch, useSelector  } from "react-redux";
import { useFormik } from "formik";
import { remindPasswd } from "../../redux/auth/auth";
import {  useNavigate } from "react-router-dom";
import {
  AuthStyled,
  FormStyled,
  Title,
  Label,
  Input,
  ErrorMessageStyled,
  AuthBtn,
  AuthLink,
  Bottle,
} from "../SignUpPage/AuthPages.styled";
import { selectIsLoading, selectIsLoggedIn } from "../../redux/auth/selectors";
import { Loader } from "../../components/Loader/Loader";
import { emailSchema } from "../../shared/utils/authValidate";

export const PassRemindPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: emailSchema,
    onSubmit: (values) => {

      console.log('disp= ', )
      dispatch(
        remindPasswd({
          email: values.email,
        })
      );
      isLoggedIn && navigate("/main");
    },
  });

  return isLoading ? (
    <Loader />
  ) : (
    <AuthStyled>
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
          <AuthBtn type="submit">Get reset link</AuthBtn>
          <AuthLink to="/signin">Sign In</AuthLink>
        </FormStyled>
        <Bottle />
    </AuthStyled>
  );
};
