import { QueryPaths, StorageKeys } from "../utils/contants";
import { AxiosInstance } from "./init";

export const UploadImgToCloud = async (data) => {
  const formData = new FormData();
  formData.append("imageFile", data);
  const response = await AxiosInstance.post(
    `${QueryPaths.UPLOADIMGTOCLOUD}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.result;
};
