import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gradient-to-r from-gray-950 to-gray-900 text-white min-h-screen max-h-full">
      <Outlet />
    </div>
  );
};

export default Layout;
