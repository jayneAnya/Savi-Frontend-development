import * as yup from "yup";

export const amountSchema = yup.object().shape({
  amount: yup
    .string()
    .required("Amount field is required")
    .matches(/^[0-9]+$/, "Amount must be only digits"),
});
