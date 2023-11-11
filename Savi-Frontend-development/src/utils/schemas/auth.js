import * as yup from "yup";

const EMAIL_IS_INVALID = "Email is invalid";
const EMAIL_IS_REQUIRED = "Email is required";
const PROVIDE_VALID_NAME = "Please provide a valid name";

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email(EMAIL_IS_INVALID)
    .required(EMAIL_IS_REQUIRED),
  firstName: yup
    .string()
    .matches(/^[A-Za-z]+$/i, PROVIDE_VALID_NAME)
    .required("First name is required"),
  lastName: yup
    .string()
    .matches(/^[A-Za-z]+$/i, PROVIDE_VALID_NAME)
    .required("Last name is required"),
  phoneNumber: yup
    .string()
    .matches(/^(\+?234|0)[\d]{10}$/i, "Please provide a valid phone number")
    .required("Phone number is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
      "Invalid password"
    )
    .required("Password is required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export const loginSchema = yup.object().shape({
  userName: yup
    .string()
    .email(EMAIL_IS_INVALID)
    .required(EMAIL_IS_REQUIRED),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

// export const resetPassword1Schema = yup.object().shape({
//   email: yup
//     .string()
//     .email(EMAIL_IS_INVALID)
//     .required(EMAIL_IS_REQUIRED),
    
// });

export const resetPassword2Schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
