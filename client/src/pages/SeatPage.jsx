import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SeatNavbar from "../components/SeatNavbar";

import UseFetchData from "../hooks/useFetchData";
import SeatPrice from "../components/SeatPrice";
import Seat from "../components/Seat";
import SeatPageInfo from "../components/SeatPageInfo";
const SeatPage = () => {
  const { id, roomId } = useParams();
  const { data } = UseFetchData(
    ["seat", roomId],
    `/Tbl_RoomSeat?RoomId=${roomId}`
  );

  const [selectSeatState, setSelectSeatState] = useState([]);
  const existingSeats =
    JSON.parse(localStorage.getItem(`selectedSeats${roomId}`)) || [];

  const selectSeat = (data) => {
    const indexToRemove = existingSeats.findIndex(
      (seat) => seat.SeatId === data.SeatId
    );

    if (indexToRemove !== -1) {
      const updatedSeats = existingSeats.filter(
        (seat, index) => index !== indexToRemove
      );

      const updatedSeatState = selectSeatState.filter(
        (seat, index) => index !== indexToRemove
      );

      setSelectSeatState(updatedSeatState);
      localStorage.setItem(
        `selectedSeats${roomId}`,
        JSON.stringify(updatedSeats)
      );
      return;
    }
    setSelectSeatState((prevSelectSeatState) => [...prevSelectSeatState, data]);
    existingSeats.push(data);
    localStorage.setItem(
      `selectedSeats${roomId}`,
      JSON.stringify(existingSeats)
    );
  };

  return (
    <div className="bg-gradient-to-r from-gray-950 to-gray-900 text-white min-h-screen max-h-full">
      <div className="flex gap-2 relative min-h-screen max-h-full justify-center">
        <Link to={`/movie/cinemas/${id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8  absolute left-10 top-6 hover:w-10 hover:h-10 transition-all duration-300 ease-in-out"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </Link>
        {/* 
        <div className="w-[10%] p-4 min-h-screen max-h-full">
          <SeatPageInfo movieId={id} roomId={roomId} />
        </div> */}
        <div className="w-full  min-h-screen max-h-full mx-auto ">
          <SeatNavbar />
          <div className="p-4 mt-10  w-full h-auto  rounded-xl">
            <div className="bg-white hover:animate-pulse h-4 p-14 mb-6 w-[60%] ml-36 translate-x-32 rounded-md shadow-slate-300  shadow-lg"></div>
            <Seat data={data} selectSeat={selectSeat} roomId={roomId} />
          </div>
          {/* <SeatPrice roomId={roomId} selectSeat={selectSeat} /> */}
        </div>
        {existingSeats.length !== 0 && (
          <div className="absolute w-16 h-16 flex justify-center   shadow-md shadow-slate-500 items-center rounded-full text-center right-16 bottom-8 bg-white text-gray-900 transition-opacity duration-700 ease-in-out">
            <i className="fa-solid fa-ticket text-3xl relative ">
              <span className="bg-red-600 animate-pulse absolute -top-6 -right-3 text-sm w-6 h-6 rounded-full text-white text-center font-medium">
                {existingSeats.length}
              </span>
            </i>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatPage;
