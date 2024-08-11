import React from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-secondary-0 row-start-1 pt-2 row-span-2 border-1 border-gray-500">
      <ul className="flex flex-col gap-y-4  ">
        <li className="">
          <CustomNavLink to="/owner/dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

function CustomNavLink({ children, to }) {
  const navlinkClass =
    "flex items-center gap-x-2 hover:bg-primary-200 hover:text-primary-900  rounded-lg px-2 py-1.5  transition-all duration-300";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navlinkClass}flex items-center gap-x-2 hover:bg-primary-100/5 hover:text-primary-900  rounded-lg px-2 py-1.5 text-secondary-600 transition-all duration-300`
          : `${navlinkClass}text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
