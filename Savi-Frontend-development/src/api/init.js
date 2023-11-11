import axios from "axios";
import { StorageKeys } from "../utils/contants";

export const AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL 
});

AxiosInstance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem(StorageKeys.TOKEN)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
); 