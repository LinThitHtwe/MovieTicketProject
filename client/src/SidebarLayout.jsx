import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "./components/SideNavBar";

const SidebarLayout = () => {
  return (
    <>
      <SideNavBar />
      <Outlet />
    </>
  );
};

export default SidebarLayout;
