import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const { auth } = useSelector((state) => state);

  if (auth.isLoading) return <h1>Loading...</h1>

  if (!auth.employee) return  <Navigate to={"/"} />;

  return <Outlet />;
};

export default PrivateRoute;
