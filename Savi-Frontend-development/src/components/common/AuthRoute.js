import React, { useEffect } from "react";
import { Loading } from "./Loading";
import { useGetProfile } from "../../hooks/useGetProfile";
import { Navigate, useNavigate } from "react-router-dom";
import { StorageKeys } from "../../utils/contants";

export const AuthRoute = ({ children }) => {
  const { data, isLoading } = useGetProfile();
  const navigate = useNavigate();
  const token = localStorage.getItem(StorageKeys.TOKEN);
  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token, data, navigate]);
  if (isLoading) {
    return <Loading />;
  }
  return children;
};
