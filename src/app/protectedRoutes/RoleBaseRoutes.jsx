import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const RoleBaseRoutes = ({allowedRoles}) => {
  const { employee } = useSelector((state) => state.auth);

  console.log(employee.data.user.role)

  if (!allowedRoles.includes(employee.data.user?.role)){
    return <Navigate to={"/unauthorized"} />
  }

  return <Outlet />;
};

export default RoleBaseRoutes;
