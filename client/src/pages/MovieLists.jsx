import React from "react";
import SideNavBar from "../components/SideNavBar";
import MovieCard from "../components/MovieCard";
const MovieLists = () => {
  return (
    <>
      <SideNavBar />
      <div className="ml-40 bg-gray-950 h-full p-4 text-white">
        <div className="flex justify-between ">
          <h1 className=" text-white ml-3 sticky text-xl">Movie Lists</h1>
          <div className="flex gap-1 items-center">
            <input
              className="p-2 rounded-lg outline-none placeholder-gray-950 text-gray-950 placeholder-opacity-50"
              placeholder="Search"
              type="text"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7 hover:scale-105 transition-all duration-500 ease-in-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10 mt-6">
          {Array(8)
            .fill()
            .map((_, index) => (
              <MovieCard key={index} />
            ))}
        </div>
        <div className="flex justify-center">
          <a
            herf="#"
            className="text-lg mt-6 hover:text-xl hover:text-yellow-500 cursor-pointer"
          >
            Load More...
          </a>
        </div>
      </div>
    </>
  );
};

export default MovieLists;
