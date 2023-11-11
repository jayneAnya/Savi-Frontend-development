import { useQuery } from "@tanstack/react-query"
import { QueryPaths } from "../utils/contants"
import { getOccupation } from "../api/kyc"

export const useOccupation = () => {
    return useQuery([QueryPaths.OCCUPATION],  () => getOccupation())
}