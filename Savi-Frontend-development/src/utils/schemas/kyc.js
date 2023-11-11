import * as yup from "yup";

export const kycSchema = yup.object().shape({
  gender: yup.string().required("Gender field is required"),
  occupation: yup.string().required("Occupation field is required"),
  dob: yup.string().required("Date of birth field is required"),
  idType: yup.string().required("ID type field is required"),
  bvn: yup
    .string()
    .matches(/^\d{11}$/, "BVN must be exactly 11 digits")
    .required("BVN field is required"),
  address: yup.string().required("Address field is required"),
  idNum: yup
    .string()
    .matches(/^\d+$/, "Identification number must contain only digits")
    .required("ID number field is required"),
});
