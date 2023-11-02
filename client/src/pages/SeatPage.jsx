import React from "react";
import { Link } from "react-router-dom";
import SeatNavbar from "../components/SeatNavbar";

const SeatPage = () => {
  return (
    <div className="flex gap-2 relative">
      <Link to="/movie/cinemas">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8 absolute left-10 top-6 hover:w-10 hover:h-10 transition-all duration-300 ease-in-out"
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
            hover:scale-[1.02] transition-all duration-700 rounded-lg shadow-custom shadow-slate-600"
            src="https://media.istockphoto.com/id/1213550611/photo/spaceman-in-the-surf.jpg?s=612x612&w=0&k=20&c=GP0HIuD4wXBdMXk-Oa8Fc9Z8J0BazUZ0l7s7ps69ajI="
          />
          <p className="text-center p-4">Movie Title</p>
        </div>
      </div>
      <div className="w-full  h-screen">
        <SeatNavbar />
        <div className="p-4 mt-10 ml-10 w-fit h-auto border-white border-2 rounded-xl">
          {Array(16)
            .fill()
            .map((_, index) => (
              <a
                key={index}
                className="border-white border-2 cursor-pointer p-1 ml-4 max-h-[60px] max-w-[60px] min-h-[60px] min-w-[60px] 
                text-sm overflow-hidden rounded-lg hover:bg-white hover:text-gray-950 transition-all duration-700 ease-in-out"
              >
                A{index + 1}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SeatPage;
