import React from "react";

export default function TotalSeatModal({ isModalOpen, setIsModalOpen }) {
  const isSidebarOpen = false;
  console.log("hihihi");
  return (
    <>
      <div
        className={`fixed z-10 min-h-screen max-h-full w-full top-0 left-0 bg-black/40  transition-all duration-500 ease-in-out ${
          isModalOpen ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed bg-gradient-to-r from-slate-700 to-slate-800 text-white min-w-[26vw] z-20 top-0 flex flex-col gap-5 right-0 h-screen w-[25%] transform  transition-all   duration-700 ease-in-out ${
          isModalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-1">
          <button
            className="mr-2 mt-1"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <i class="fa-solid fa-xmark hover:scale-110"></i>
          </button>
        </div>
        <div className="flex p-2 gap-3 flex-col">
          <h2 className="text-xl  w-ful text-center">Total Selected Seat</h2>
          <ul className="p-2 w-full">
            {[1, 2, 3, 4].map((index) => (
              <li
                key={index}
                className="flex justify-around gap-10 border-white mb-3 p-2 
                items-center rounded-md bg-white shadow-slate-600 shadow-lg text-gray-950"
              >
                <span className="">A{index}</span>
                <span>5000</span>
                <i className="fa-solid fa-trash text-red-600"></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
