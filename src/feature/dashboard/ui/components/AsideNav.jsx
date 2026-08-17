import { Workflow } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import {
  adminNavigation,
  employeeNavigation,
} from "../../../../app/constants/navigation";
import { useSelector } from "react-redux";
import NavigationTab from "./NavigationTab";

const AsideNav = () => {
  const { employee } = useSelector((state) => state.auth);

  const navigation =
    employee.data.user.role === "admin" ?adminNavigation:  employeeNavigation ;

  return (
    <div>
      <div className="bg-[var(--surface-bright)] h-screen w-50 p-4">
        <h1 className="text-xl ]">Work-Nest</h1>
        <p>EnterPrice Workspace</p>

        <div className="flex gap-10 py-10 flex-col">
          {navigation.map((routes) => {
            return <NavigationTab path={routes.path} title={routes.title} icon={routes.Icon} />
          })}
        </div>
      </div>
    </div>
  );
};

export default AsideNav;
