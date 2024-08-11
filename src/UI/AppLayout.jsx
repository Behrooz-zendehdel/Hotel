import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      <Sidebar />
      <div className="bg-secondary-100 p-8 overflow-y-auto ">
        <div className="mx-auto max-w-screen-md flex flex-col gap-y-12 bg-red-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
