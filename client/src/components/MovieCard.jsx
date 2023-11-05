import React from "react";
import { Link } from "react-router-dom";
import UseFetchData from "../hooks/useFetchData";
import MovieListsSkeleton from "../skeletons/MovieListsSkeleton";

const fetchUrl = "/Tbl_MovieList";
const MovieCard = () => {
  const { isLoading, isError, error, data } = UseFetchData(
    ["movies"],
    fetchUrl
  );
  return (
    <>
      {isLoading &&
        Array(8)
          .fill()
          .map((_, index) => <MovieListsSkeleton key={index} />)}

      {isError && <p>{error.message}</p>}
      {data &&
        data.map((d) => (
          <Link to={`/movie/${d.MovieId}`}>
            <div
              className="relative bg-gray-950 rounded-lg min-h-[350px] max-h-[350px] overflow-hidden
                    min-w-[260px] max-w-[260px]
                    shadow-md shadow-slate-800 hover:scale-[1.03] transition-all duration-500 ease-in-out
                    cursor-pointer text-center text-white group"
            >
              <img
                className="object-cover min-h-[100%] min-w-full max-h-[100%] 
            hover:scale-[1.02] transition-all duration-700 "
                src="https://media.istockphoto.com/id/1213550611/photo/spaceman-in-the-surf.jpg?s=612x612&w=0&k=20&c=GP0HIuD4wXBdMXk-Oa8Fc9Z8J0BazUZ0l7s7ps69ajI="
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 absolute top-3 right-2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out hover:scale-105"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <div className="bg-gray-800 absolute bottom-0 text-sm w-full h-[80px] opacity-0 group-hover:opacity-80 transform translate-y-full group-hover:translate-y-0 transition-all duration-[900ms] ease-in-out">
                <p className="mb-2">{d.MovieTitle}</p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 inline"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {d.Duration}
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 inline"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                    />
                  </svg>
                  Action, Adventure
                </p>
              </div>
            </div>
            <h2 className="text-center mt-2 cursor-pointer">{d.MovieTitle}</h2>
          </Link>
        ))}
    </>
  );
};

export default MovieCard;
