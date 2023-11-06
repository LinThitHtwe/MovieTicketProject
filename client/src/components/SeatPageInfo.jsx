import React from "react";
import UseFetchData from "../hooks/useFetchData";

export default function SeatPageInfo({ movieId, roomId }) {
  const movieFetchUrl = `/Tbl_MovieList?MovieId=${movieId}`;
  const movieQueryKey = ["movie", movieId];
  const { isLoading, isError, error, data } = UseFetchData(
    movieQueryKey,
    movieFetchUrl
  );

  const cinemaFetchUrl = `/Tbl_CinemaList?`;
  const cinemaQueryKey = ["cinemas"];
  const { data: cinemaData } = UseFetchData(cinemaQueryKey, cinemaFetchUrl);

  return (
    <>
      {data && (
        <div className="min-w-[80%] max-w-[80%] min-h-[80%] max-h-[80%] ml-10 mt-14 rounded-lg overflow-hidden">
          <img
            className="object-cover min-h-[100%] min-w-full max-h-[100%] 
    hover:scale-[1.02] transition-all duration-700 rounded-lg shadow-custom shadow-slate-600"
            src="https://media.istockphoto.com/id/1213550611/photo/spaceman-in-the-surf.jpg?s=612x612&w=0&k=20&c=GP0HIuD4wXBdMXk-Oa8Fc9Z8J0BazUZ0l7s7ps69ajI="
          />
          <p className="text-center p-4 ">{data[0].MovieTitle}</p>
          <p className="text-center p-4 ">{String(cinemaInfo)}</p>
          <p className="text-center p-4 ">{data[0].MovieTitle}</p>
        </div>
      )}
    </>
  );
}
