import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("This field is required")
    .email("Should be a valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Should be atleast 6 characters"),
});
