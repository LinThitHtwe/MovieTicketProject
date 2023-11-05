import React from "react";
import { Link } from "react-router-dom";
import SeatNavbar from "../components/SeatNavbar";

import UseFetchData from "../hooks/useFetchData";
const SeatPage = () => {
  const { data } = UseFetchData(["seat", 1], "/Tbl_RoomSeat?RoomId=1");

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
      <div className="w-[10%] p-4 h-screen">
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
          <div className="flex justify-center">
            {data &&
              data
                .filter((d) => d.RowName === "A")
                .map((d, index) => (
                  <div
                    key={index}
                    className={`${
                      d.SeatNo === null ? "opacity-0" : "border-white border-2"
                    } rounded-xl inline-block cursor-pointer p-1 ml-3 min-w-[38px] max-w-[38px] min-h-[38px] max-h-[38px] ${
                      d.SeatNo === null
                        ? ""
                        : "hover:bg-white transition-all duration-700 ease-in-out hover:text-gray-950 hover:scale-[1.02]"
                    }`}
                  >
                    <div className="flex justify-center items-center">
                      <span
                        className={`text-sm inline-block ${
                          d.SeatNo === null ? "opacity-0" : ""
                        }`}
                      >
                        {d.RowName}
                        {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
          </div>
          <div className="flex justify-center">
            {data &&
              data
                .filter((d) => d.RowName === "B")
                .map((d, index) => (
                  <div
                    key={index}
                    className={`${
                      d.SeatNo === null ? "opacity-0" : "border-white border-2"
                    } rounded-xl inline-block cursor-pointer p-1 ml-3 mt-3 min-w-[38px] max-w-[38px] min-h-[38px] max-h-[38px] ${
                      d.SeatNo === null
                        ? ""
                        : "hover:bg-white transition-all duration-700 ease-in-out hover:text-gray-950 hover:scale-[1.02]"
                    }`}
                  >
                    <div className="flex justify-center items-center">
                      <span
                        className={`text-sm inline-block ${
                          d.SeatNo === null ? "opacity-0" : ""
                        }`}
                      >
                        {d.RowName}
                        {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
          </div>

          <div className="flex justify-center">
            {data &&
              data
                .filter((d) => d.RowName === "C")
                .map((d, index) => (
                  <div
                    key={index}
                    className={`${
                      d.SeatNo === null ? "opacity-0" : "border-white border-2"
                    } rounded-xl inline-block mt-3 cursor-pointer p-1 ml-3 min-w-[38px] max-w-[38px] min-h-[38px] max-h-[38px] ${
                      d.SeatNo === null
                        ? ""
                        : "hover:bg-white transition-all duration-700 ease-in-out hover:text-gray-950 hover:scale-[1.02]"
                    }`}
                  >
                    <div className="flex justify-center items-center">
                      <span
                        className={`text-sm inline-block ${
                          d.SeatNo === null ? "opacity-0" : ""
                        }`}
                      >
                        {d.RowName}
                        {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
          </div>
          <div className="flex justify-center">
            {data &&
              data
                .filter((d) => d.RowName === "D")
                .map((d, index) => (
                  <div
                    key={index}
                    className={`${
                      d.SeatNo === null ? "opacity-0" : "border-white border-2"
                    } rounded-xl inline-block mt-3 cursor-pointer p-1 ml-3 min-w-[38px] max-w-[38px] min-h-[38px] max-h-[38px] ${
                      d.SeatNo === null
                        ? ""
                        : "hover:bg-white transition-all duration-700 ease-in-out hover:text-gray-950 hover:scale-[1.02]"
                    }`}
                  >
                    <div className="flex justify-center items-center">
                      <span
                        className={`text-sm inline-block ${
                          d.SeatNo === null ? "opacity-0" : ""
                        }`}
                      >
                        {d.RowName}
                        {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
          </div>

          <div className="flex justify-center">
            {data &&
              data
                .filter((d) => d.RowName === "E")
                .map((d, index) => (
                  <div
                    key={index}
                    className={`${
                      d.SeatNo === null ? "opacity-0" : "border-white border-2"
                    } rounded-xl inline-block mt-3 cursor-pointer p-1 ml-3 min-w-[38px] max-w-[38px] min-h-[38px] max-h-[38px] ${
                      d.SeatNo === null
                        ? ""
                        : "hover:bg-white transition-all duration-700 ease-in-out hover:text-gray-950 hover:scale-[1.02]"
                    }`}
                  >
                    <div className="flex justify-center items-center">
                      <span
                        className={`text-sm inline-block ${
                          d.SeatNo === null ? "opacity-0" : ""
                        }`}
                      >
                        {d.RowName}
                        {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
          </div>

          <div className=" flex justify-center">
            {data &&
              data
                .filter((d) => d.RowName === "F")
                .map((d, index) => (
                  <div
                    key={index}
                    className={`${
                      d.SeatNo === null ? "opacity-0" : "border-white border-2"
                    } rounded-xl inline-block mt-3 cursor-pointer p-1 ml-3 ${
                      d.SeatType == "couple"
                        ? "min-w-[68px] max-w-[68px]"
                        : "min-w-[38px] max-w-[38px]"
                    }min-w-[38px] max-w-[38px] min-h-[38px] max-h-[38px] ${
                      d.SeatNo === null
                        ? ""
                        : "hover:bg-white transition-all duration-700 ease-in-out hover:text-gray-950 hover:scale-[1.02]"
                    }`}
                  >
                    <div className="flex justify-center items-center">
                      <span
                        className={`text-sm inline-block ${
                          d.SeatNo === null ? "opacity-0" : ""
                        }`}
                      >
                        {d.RowName}
                        {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
          </div>

          <div className="flex justify-center">
            {data &&
              data
                .filter((d) => d.RowName === "G")
                .map((d, index) => (
                  <div
                    key={index}
                    className={`${
                      d.SeatNo === null ? "opacity-0" : "border-white border-2"
                    } rounded-xl inline-block mt-2 cursor-pointer p-1 ml-3 min-w-[38px] max-w-[38px] min-h-[38px] max-h-[38px] ${
                      d.SeatNo === null
                        ? ""
                        : "hover:bg-white transition-all duration-700 ease-in-out hover:text-gray-950 hover:scale-[1.02]"
                    }`}
                  >
                    <div className="flex justify-center items-center">
                      <span
                        className={`text-sm inline-block ${
                          d.SeatNo === null ? "opacity-0" : ""
                        }`}
                      >
                        {d.RowName}
                        {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
          </div>

          <div className="flex justify-center">
            {data &&
              data
                .filter((d) => d.RowName === "H")
                .map((d, index) => (
                  <div
                    key={index}
                    className={`${
                      d.SeatNo === null ? "opacity-0" : "border-white border-2"
                    } rounded-xl inline-block mt-2 cursor-pointer p-1 ml-3 min-w-[38px] max-w-[38px] min-h-[38px] max-h-[38px] ${
                      d.SeatNo === null
                        ? ""
                        : "hover:bg-white transition-all duration-700 ease-in-out hover:text-gray-950 hover:scale-[1.02]"
                    }`}
                  >
                    <div className="flex justify-center items-center">
                      <span
                        className={`text-sm inline-block ${
                          d.SeatNo === null ? "opacity-0" : ""
                        }`}
                      >
                        {d.RowName}
                        {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatPage;
