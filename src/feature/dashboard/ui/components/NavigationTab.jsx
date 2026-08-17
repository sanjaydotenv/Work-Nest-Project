import React from "react";
import { NavLink } from "react-router";

const NavigationTab = ({ path, title, icon }) => {
  console.log(title, path, icon);

  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          `flex gap-3 transition-all duration-120 font-semibold ${isActive ? "text-[#A8A8FA] border-r border-blue-500 ml-2" : ""}`
        }
        to={path}
        end
      >
        {icon} {title}
      </NavLink>
    </div>
  );
};

export default NavigationTab;
