import { Bell, Bluetooth, Menu, Moon, Search, Sun } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../../shared/state/themeSlice";

const Navbar = () => {
  const { mode } = useSelector((state) => state.theme);

  const dispath = useDispatch()

  return (
    <div className="flex justify-between bg-[--bg-card] items-center p-5">
      <div className="flex gap-4 items-center w-[30%] rounded px-3 py-2 bg-[var(--bg-surface)] border border-gray-600">
        <Search size={23} />
        <input
          className="outline-0 w-full text-[var(--text-primary)]"
          type="text"
          placeholder="Search workspace.."
        />
      </div>
      <div className="flex gap-4 hover:cursor-pointer">
        {mode === "dark" ? (
          <div>
            <Sun onClick={() => dispath(toggleTheme())} />
          </div>
        ) : (
          <div onClick={() => dispath(toggleTheme())}>
            <Moon />
          </div>
        )}
        <Bell size={23} />
        <Menu size={23} />
      </div>
    </div>
  );
};

export default Navbar;
