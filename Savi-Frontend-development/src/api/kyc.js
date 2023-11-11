import { QueryPaths } from "../utils/contants";
import { AxiosInstance } from "./init";

export const getIdentityType= async (data) => {
    const response = await AxiosInstance.get(QueryPaths.INDENTITY, data);
    return response.data;
}

export const getOccupation= async (data) => {
    const response = await AxiosInstance.get(QueryPaths.OCCUPATION, data);
    return response.data;
}