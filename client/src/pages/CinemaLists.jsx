import React from "react";
import CinemaCard from "../components/CinemaCard";
import { Link } from "react-router-dom";

const CinemaLists = () => {
  return (
    <div className="ml-40  bg-gray-950 text-white min-h-screen max-h-full">
      <div className="flex justify-between">
        <Link to="/movie/id" className=" ml-4 p-3  block">
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
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </Link>
        <div className="flex gap-1 items-center mr-5 mt-2">
          <input
            className="p-[5px] rounded-lg outline-none placeholder-gray-950 text-gray-950 placeholder-opacity-50"
            placeholder="Search"
            type="text"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-1">
        {Array(6)
          .fill()
          .map((_, index) => (
            <CinemaCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default CinemaLists;
