import { QueryPaths, StorageKeys } from "../utils/contants";
import { AxiosInstance } from "./init";

export const signup = async (data) => {
    const response = await AxiosInstance.post(QueryPaths.SIGNUP, data);
    return response.data;
}

export const login = async (data) => { 
    const response = await AxiosInstance.post(QueryPaths.LOGIN, data);
    if (response.data.token) {
        localStorage.setItem(StorageKeys.TOKEN, response.data.token);
    }
    return response.data;
}

export const forgotPassword = async (data) => {
    const response = await AxiosInstance.post(QueryPaths.FORGOTPASSWORD, data);
    return response.data;
}

