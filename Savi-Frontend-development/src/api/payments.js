import { QueryPaths, StorageKeys } from "../utils/contants";
import { AxiosInstance } from "./init";

export const verifyPayment = async (reference) => {
  try {
    const response = await AxiosInstance.get(
      `${QueryPaths.VERIFYPAYMENT}/${reference}`
    );
    return response.status ?? true;
  } catch (error) {
    return false;
  }
};

export const getWallet = async () => {
  const userId = localStorage.getItem(StorageKeys.USERID);
  try {
    const response = await AxiosInstance.get(
      `${QueryPaths.GETWALLET}/${userId}`
    );
    return response.data.result;
  } catch (error) {
    return error;
  }
};

export const fundTarget = async (id, amount) => {
  const userId = localStorage.getItem(StorageKeys.USERID);
  try {
    const response = await AxiosInstance.post(
      `${QueryPaths.SETTARGET}/${id}/fundtarget?amount=${amount}&userId=${userId}`
    );
    return response.data.result;
  } catch (error) {
    return error;
  }
};
