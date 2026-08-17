import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import Navbar from "../../feature/dashboard/ui/components/Navbar";
import AsideNav from "../../feature/dashboard/ui/components/AsideNav";

const mainLayout = () => {
  const { mode } = useSelector((state) => state.theme);

  useEffect(() => {
    console.log(mode);
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [mode]);

  return (
    <div className="flex bg-[var(--surface-container)]]">
      <AsideNav />
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default mainLayout;
