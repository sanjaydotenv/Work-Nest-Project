import React from "react";
import { Outlet } from "react-router";

const mainLayout = () => {
  return (
    <div>
      hy this is for navbar
      <Outlet />
    </div>
  );
};

export default mainLayout;
