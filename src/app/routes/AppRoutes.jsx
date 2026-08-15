import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import Login from "../../feature/auth/ui/pages/Login";
import Register from "../../feature/auth/ui/pages/Register";
import Home from "../../feature/dashboard/ui/pages/Home";
import { useDispatch } from "react-redux";
import { loggedInEmployee } from "../../feature/auth/state/auth/authAction";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      console.log("useEffect");
      dispatch(loggedInEmployee());
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
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
    {
      path: "/dashboard/home",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
