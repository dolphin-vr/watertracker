import * as Yup from "yup";

const EMAIL_REGX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .matches(EMAIL_REGX, "Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .required("Password is required"),
  repeatPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .required("Repeat Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const signinSchema = Yup.object().shape({
  email: Yup.string()
    .matches(EMAIL_REGX, "Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .required("Password is required"),
});

export const emailSchema = Yup.object().shape({
  email: Yup.string()
    .matches(EMAIL_REGX, "Enter a valid email")
    .required("Email is required"),
});
