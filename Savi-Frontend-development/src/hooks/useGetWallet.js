import { useQuery } from "@tanstack/react-query";
import { QueryPaths } from "../utils/contants";
import { getWallet } from "../api/payments";

export const useGetWallet = () => {
    return useQuery([QueryPaths.GETWALLET],  () => getWallet())
}