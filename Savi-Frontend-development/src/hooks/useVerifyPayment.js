import { useQuery } from "@tanstack/react-query";
import { QueryPaths } from "../utils/contants";
import { verifyPayment } from "../api/paystack";


export const useVerifyPayment = (reference) => {
    return useQuery(QueryPaths.VERIFYPAYMENT, () => verifyPayment(reference))
};
