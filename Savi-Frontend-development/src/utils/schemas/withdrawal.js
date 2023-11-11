import * as yup from "yup";

export const withdrawalSchema = yup.object().shape({
  amount: yup
    .string()
    .required("Amount field is required")
    .matches(/^[0-9]+$/, "Amount must be only digits"),
    walletId: yup
    .string()
    .required("Wallet ID field is required")
    .matches(/^\d{10}$/, "Wallet ID must be exactly 10 digits"),
});