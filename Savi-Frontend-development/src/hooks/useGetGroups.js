import { useQuery } from "@tanstack/react-query"
import { QueryPaths } from "../utils/contants"
import { getGroups, getGrps, getUserGroups } from "../api/groups"

export const useGetGroups = () => {
    return useQuery([QueryPaths.GETGROUP],  () => getGroups())
}

export const useViewGrps = (id) => {
    return useQuery([QueryPaths.GETGROUPBYID, id],  () => getGrps(id))
}

export const useGetUserGroups = () => {
    return useQuery([QueryPaths.GETUSERGROUPS],  () => getUserGroups())
}
