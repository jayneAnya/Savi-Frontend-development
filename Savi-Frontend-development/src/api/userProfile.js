import { QueryPaths, StorageKeys } from "../utils/contants";
import { AxiosInstance } from "./init";

export const getUserProfile = async (data) => {
  const token = localStorage.getItem(StorageKeys.TOKEN);
  const response = await AxiosInstance.get(
    `${QueryPaths.GETUSER}/token?token=${token}`,
    data
  );
  localStorage.setItem(StorageKeys.USERID, response.data.id);
  return response.data;
};
