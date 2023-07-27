import * as Yup from "yup";

export const LoginValidations = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email("Invalid email, please provide a valid email.")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
};
