import { useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { remindPasswd } from "../../redux/auth/auth";
import { selectError, selectIsLoading, selectStatus } from "../../redux/auth/selectors";
import { errorUnset, statusUnset } from "../../redux/auth/authSlice";
import { emailSchema } from "../../shared/utils/authValidate";
import { Main, StyledForm, ErrorMsg,
  Title,
  Label,
  AuthBtn, AuthLink,
} from "../SignUpPage/AuthPages.styled";
import { Loader } from "../../components/Loader/Loader";
import { InputField } from "../../components/InputField/InputField";

export const PassRemindPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (status === 200) {
      dispatch(statusUnset());
      toast.success('Password reset link has been send to your e-mail.\n Please check your mailbox.', {id: 'toasterId'});
    }
    if (error) {
      toast.error(`${error}`, {id: 'toasterId'});
      dispatch(errorUnset());
    }
  }, [status, error, dispatch]);
  
  return (
    <Main>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={emailSchema}
        onSubmit={(values) => {
          dispatch(remindPasswd( values ));
          toast.loading('Sending an e-mail.\n Please wait.', {id: 'toasterId'});
        }}
      >
        <StyledForm>
          <Title>Password reset form</Title>
          <Label>
            Enter your email
            <InputField type="email" placeholder="E-mail" name="email" />
            <ErrorMsg name="email" component="span" />
          </Label>
          <AuthBtn type="submit">Get reset link</AuthBtn>
          <AuthLink to="/signin">Sign In</AuthLink>
        </StyledForm>
      </Formik>
			{isLoading && <Loader />}
    </Main>
  );
};
