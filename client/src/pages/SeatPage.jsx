import React from "react";
import { Link } from "react-router-dom";

const SeatPage = () => {
  return (
    <div className="flex gap-2 relative">
      <Link to="/movie/cinema">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8 absolute left-10 top-6 hover:w-9 hover:h-9 transition-all duration-300 ease-in-out"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </Link>
      <div className="w-[40%] p-4 h-screen">
        <div className="min-w-[80%] max-w-[80%] min-h-[80%] max-h-[80%] ml-10 mt-14 rounded-lg overflow-hidden">
          <img
            className="object-cover min-h-[100%] min-w-full max-h-[100%] 
            hover:scale-[1.02] transition-all duration-700 rounded-lg"
            src="https://media.istockphoto.com/id/1213550611/photo/spaceman-in-the-surf.jpg?s=612x612&w=0&k=20&c=GP0HIuD4wXBdMXk-Oa8Fc9Z8J0BazUZ0l7s7ps69ajI="
          />
          <p className="text-center p-4">Movie Title</p>
        </div>
      </div>
      <div className="w-full  h-screen">
        <div className="mt-10 ">nav</div>
        <div className="p-4 mt-24 ml-10 w-fit h-fit border-white border-2">
          <a className="border-white border-2 p-1 h-3 w-3 rounded-lg">A1</a>
          <a className="border-white border-2 p-1 h-3 w-3 rounded-lg">A1</a>
          <a className="border-white border-2 p-1 h-3 w-3 rounded-lg">A1</a>
          <a className="border-white border-2 p-1 h-3 w-3 rounded-lg">A1</a>
          <a className="border-white border-2 p-1 h-3 w-3 rounded-lg">A1</a>
          <a className="border-white border-2 p-1 h-3 w-3 rounded-lg">A1</a>
          <a className="border-white border-2 p-1 h-3 w-3 rounded-lg">A1</a>
          <a className="border-white border-2 p-1 h-3 w-3 rounded-lg">A1</a>
          <a className="border-white border-2 p-1 h-3 w-3 rounded-lg">A1</a>
          <a className="border-white border-2 p-1 h-3 w-3 rounded-lg">A1</a>
        </div>
      </div>
    </div>
  );
};

export default SeatPage;
