import React from "react";
import UseFetchData from "../hooks/useFetchData";
import { Link } from "react-router-dom";

const CinemaRoom = ({ cinemaId }) => {
  const queryKey = ["cinema-room", cinemaId];
  const fetchUrl = `/Tbl_CinemaRoom?CinemaId=${cinemaId}`;
  const { data } = UseFetchData(queryKey, fetchUrl);
  return (
    <>
      <div className="pt-4 mt-4 flex gap-4 flex-wrap">
        {data &&
          data.map((d) => (
            <Link
              to={`/seats`}
              className="p-2 ml-2 bg-gray-800 rounded-2xl shadow-custom shadow-slate-700
                 hover:bg-gray-700 hover:scale-105 transition-all duration-300 ease-in-out inline-block "
            >
              {d.RoomName}
            </Link>
          ))}
      </div>
    </>
  );
};

export default CinemaRoom;
