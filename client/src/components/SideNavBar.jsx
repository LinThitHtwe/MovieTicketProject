import React from "react";

const SideNavBar = () => {
  return (
    <nav className="fixed bg-gray-900 w-40 h-screen text-white">
      <ul className="space-y-6 p-2">
        <li className="flex gap-2 items-center align-middle">
          <span className="text-2xl">Main Title</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 hover:w-7 hover:h-7 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </li>
        <li className="py-2 px-4 border-red-600 border-l-2 hover:bg-gray-800 cursor-pointer">
          Navbar
        </li>
        <li className="py-2 px-4 border-gray-900 border-l-2 hover:bg-gray-800 cursor-pointer">
          Navbar
        </li>
        <li className="py-2 px-4  border-gray-900 border-l-2 hover:bg-gray-800 cursor-pointer">
          Navbar
        </li>
        <li className="py-2 px-4  border-gray-900 border-l-2  hover:bg-gray-800 cursor-pointer">
          Navbar
        </li>
        <li className="py-2 px-4  border-gray-900 border-l-2 hover:bg-gray-800 cursor-pointer">
          Navbar
        </li>
      </ul>
      <div className="absolute bottom-0 p-4 bg-gray-800 w-full flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="text-sm break-all">hai@gmail.com</span>
      </div>
    </nav>
  );
};

export default SideNavBar;
