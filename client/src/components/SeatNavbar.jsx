import React from "react";

const SeatNavbar = () => {
  return (
    <div className="mt-10 flex h-[120px]">
      <div className="w-[60%] ">
        <p className="mb-2 p-2 border-gray-900 border-b-2 w-[60%] ">Date</p>
        <select className="p-1 ml-2 mt-2 w-44 rounded-lg text-gray-950 focus:ring-blue-500">
          <option value="#" selected>
            02-11-2023
          </option>
        </select>
        <div className="border-gray-900 border-b-2 mt-4 w-[60%]"></div>
      </div>
      <div className="w-full h-full ">
        <p className="mb-2 p-2 border-gray-900 border-b-2 w-[60%]">Show Time</p>
        <div className="p-2 mb-2 flex gap-6 border-gray-900 border-b-2 min-w-[60%] max-w-[60%]">
          <span className="border-red-600 border-b-4">10:30</span>
          <span className="border-white border-opacity-0 hover:border-b-2 transition-all duration-300 ease-in-out hover:border-opacity-100">
            12:30
          </span>
          <span className="border-white border-opacity-0 hover:border-b-2 transition-all duration-300 ease-in-out hover:border-opacity-100">
            15:30
          </span>
          <span className="border-white border-opacity-0 hover:border-b-2 transition-all duration-300 ease-in-out hover:border-opacity-100">
            18:30
          </span>
        </div>
      </div>
    </div>
  );
};

export default SeatNavbar;
