import { QueryPaths, StorageKeys } from "../utils/contants";
import { AxiosInstance } from "./init";

export const CreateGroup = async (data) => {
    const response = await AxiosInstance.post(QueryPaths.CREATEGROUP, data);
    return response.data;
}

export const getGroups= async (data) => {
    const response = await AxiosInstance.get(QueryPaths.GETGROUP, data);
    return response.data?.result;
}
export const getGrps = async (id) => {
    const response = await AxiosInstance.get(`${QueryPaths.GETGROUPBYID}/${id}`);
    console.log(response.data);
    return response?.data?.result;
  };

export const joinGroup = async (data, id) => {
    const userId = localStorage.getItem(StorageKeys.USERID);
    const response = await AxiosInstance.post(`${QueryPaths.JOINGROUP}?UserId=${userId}&GroupId=${id}`, data);
    return response.data;
}
export const getUserGroups = async (data) => {
    const userId = localStorage.getItem(StorageKeys.USERID);
    const response = await AxiosInstance.get(`${QueryPaths.GETUSERGROUPS}/${userId}`, data);
    return response?.data?.result;
}