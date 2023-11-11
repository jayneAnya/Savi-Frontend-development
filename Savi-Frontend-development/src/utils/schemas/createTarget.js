import * as yup from "yup";

export const createTargetSchema = yup.object().shape({
  target: yup.string().required("Target is required"),
  targetAmount: yup
    .string()
    .required("Target amount is required")
    .matches(/^[0-9]+$/i, "Please enter a valid amount"),
  amountToSave: yup
    .string()
    .required("Amount to save is required")
    .matches(/^[0-9]+$/i, "Please enter a valid amount"),
  frequency: yup.number().required("Frequency is required"),
  startDate: yup.string().required("Start date is required"),
  withdrawalDate: yup.string().required("Withdrawal date is required"),
});
