import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gray-950">
      <Outlet />
    </div>
  );
};

export default Layout;
