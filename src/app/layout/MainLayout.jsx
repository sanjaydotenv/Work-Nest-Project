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
    <div className="flex h-screen overflow-hidden bg-[var(--background)]">
      <AsideNav />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Navbar />

        <main className="min-h-0 overflow-y-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default mainLayout;
