import { QueryPaths, StorageKeys } from "../utils/contants";
import { AxiosInstance } from "./init";

export const CreateTarget = async (data) => {
  const userId = localStorage.getItem(StorageKeys.USERID);
  const response = await AxiosInstance.post(
    `${QueryPaths.CREATETARGET}?userId=${userId}`,
    data
  );
  return response.data;
};

export const getTargets = async (data) => {
  const response = await AxiosInstance.get(QueryPaths.GETTARGET, data);
  return response?.data?.result;
};

export const getTarget = async (id) => {
  const response = await AxiosInstance.get(`${QueryPaths.GETTARGET}/${id}`);
  console.log(response.data);
  return response?.data?.result;
};

export const getUserTarget = async (data) => {
  const userId = localStorage.getItem(StorageKeys.USERID);
  const response = await AxiosInstance.get(
    `${QueryPaths.GETTARGET}/user/${userId}/settargets`,
    data
  );
  return response?.data;
};
