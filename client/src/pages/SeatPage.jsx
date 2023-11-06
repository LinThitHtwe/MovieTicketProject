import React from "react";
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

  return (
    <div className="bg-gradient-to-r from-gray-950 to-gray-900 text-white min-h-screen max-h-full">
      <div className="flex gap-2 relative min-h-screen max-h-full">
        <Link to={`/movie/cinemas/${id}`}>
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
        <div className="w-[10%] p-4 min-h-screen max-h-full">
          <SeatPageInfo movieId={id} roomId={roomId} />
        </div>
        <div className="w-full  min-h-screen max-h-full ml-5">
          <SeatNavbar />
          <div className="p-4 mt-10 ml-10 w-fit h-auto border-white border-2 rounded-xl">
            <Seat data={data} />
          </div>
          <SeatPrice />
        </div>
      </div>
    </div>
  );
};

export default SeatPage;
