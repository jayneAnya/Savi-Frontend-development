import * as yup from "yup";

export const createGroupSchema = yup.object().shape({
  savesName: yup
    .string()
    .required("Group name is required"),

  contributionAmount: yup
    .string()
    .matches(/^[0-9]+$/i, "Please enter a valid amount")
    .required("Amount is required"),

  expectedstartDate: yup.string().required("Start date is required"),

  expectedendDate: yup.string().required("End date is required"),

  frequencyId: yup.number().required("Saving frequency is required"),

  runtime: yup.number().required("Time is required"),

  purPoseAndGoal: yup.string().required("Purpose and goals is required"),

  termsAndCondition: yup.string().required("Terms and conditions is required"),
});
