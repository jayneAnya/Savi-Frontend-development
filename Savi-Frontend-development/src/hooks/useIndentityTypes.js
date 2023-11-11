import { useQuery } from "@tanstack/react-query"
import { QueryPaths } from "../utils/contants"
import { getIdentityType } from "../api/kyc"

export const useIndentityTypes = () => {
    return useQuery([QueryPaths.INDENTITY],  () => getIdentityType())
}
