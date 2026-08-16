import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";

const mainLayout = () => {

  const { mode } = useSelector((state) => state.theme);

  useEffect(() => {
    console.log(mode)
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [mode]);

  return (
    <div>
      hy this is for navbar
      <Outlet />
    </div>
  );
};

export default mainLayout;
