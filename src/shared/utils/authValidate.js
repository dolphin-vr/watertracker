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

export const calcSchema = Yup.object().shape({
    gender: Yup.string().required("Gender is required"),
    weight: Yup.number()
      .typeError("Only number allowed")
      .integer("Only integer number")
      .positive("Only positive")
      .lessThan(700, "You have a lot of hard weight"),
    time: Yup.number()
      .typeError("Only number allowed")
      .positive("Only positive")
      .lessThan(24, "You cannot be active for more than 24 hours")
      .integer("Only integer number"),
    rate: Yup.number()
      .typeError("Only number allowed")
      .positive("Only positive")
      .lessThan(15, "You could drown in that much water")
      .required("Rate is required"),
});