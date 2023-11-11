import { useQuery } from "@tanstack/react-query";
import { QueryPaths } from "../utils/contants";
import { getUserProfile } from "../api/userProfile";

export const useGetProfile = () => {
  return useQuery([QueryPaths.GETUSER], () => getUserProfile());
};
