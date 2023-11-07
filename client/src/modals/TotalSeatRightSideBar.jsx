import React from "react";
import UseFetchData from "../hooks/useFetchData";

export default function TotalSeatRightSideBar({
  isModalOpen,
  setIsModalOpen,
  existingSeats,
  selectSeat,
  roomId,
}) {
  const fetchUrl = `/Tbl_SeatPrice?RoomId=${roomId}`;
  const queryKey = ["seat-price", roomId];
  const { data } = UseFetchData(queryKey, fetchUrl);
  console.log(existingSeats.length);
  return (
    <>
      <div
        className={`fixed z-10 min-h-screen max-h-full w-full top-0 left-0 bg-black/40  transition-all duration-500 ease-in-out ${
          isModalOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsModalOpen(!isModalOpen)}
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
            {existingSeats.length != 0 &&
              existingSeats.map((es, index) => (
                <li
                  key={index}
                  className="flex justify-around gap-10 hover:bg-gray-300 mb-3 p-2 items-center rounded-md bg-white shadow-slate-600 shadow-lg text-gray-950"
                >
                  <span className="">
                    {es.RowName}
                    {es.SeatNo}
                  </span>
                  <span>
                    {" "}
                    {data &&
                      data.find((priceData) => priceData.RowName == es.RowName)
                        .SeatPrice}
                    Ks
                  </span>
                  <i
                    className="fa-solid fa-trash text-red-600 cursor-pointer hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out"
                    onClick={() => selectSeat(es)}
                  ></i>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
