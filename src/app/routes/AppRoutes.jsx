import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import Login from "../../feature/auth/ui/pages/Login";
import Register from "../../feature/auth/ui/pages/Register";
import Home from "../../feature/dashboard/ui/pages/Home";
import { useDispatch } from "react-redux";
import { loggedInEmployee } from "../../feature/auth/state/auth/authAction";
import PublicRoute from "../protectedRoutes/PublicRoute";
import PrivateRoute from "../protectedRoutes/PrivateRoute";
import { commonRoutes } from "./commonRoutes";
import RoleBaseRoutes from "../protectedRoutes/RoleBaseRoutes";
import { adminRoutes } from "./adminRoutes";
import { employeeRoutes } from "./employeeRoutes";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(loggedInEmployee());
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/home",
      element: <PrivateRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            ...commonRoutes,
            {
              element: <RoleBaseRoutes allowedRoles={"admin"} />,
              children: adminRoutes,
            },
            {
              element: <RoleBaseRoutes allowedRoles={"employee"} />,
              children: employeeRoutes,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
