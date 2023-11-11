import { useQuery } from "@tanstack/react-query"
import { QueryPaths } from "../utils/contants"
import { getTargets, getTarget, getUserTarget } from "../api/target"

export const useTargets = () => {
    return useQuery([QueryPaths.GETTARGET],  () => getTargets())
}

export const useTarget = (id) => {
    return useQuery([QueryPaths.GETTARGET, id],  () => getTarget(id))
}

export const useUserTargets = () => {
    return useQuery([QueryPaths.GETUSERTARGET],  () => getUserTarget())
}

