import React from "react";
import { Link, useParams } from "react-router-dom";
import UseFetchData from "../hooks/useFetchData";

const MovieDetails = () => {
  const { id } = useParams();
  const queryKey = ["movie", id];
  const fetchUrl = `/Tbl_MovieList?MovieId=${id}`;

  const { isLoading, isError, error, data } = UseFetchData(queryKey, fetchUrl);
  return (
    <>
      {isLoading && (
        <p className="ml-40 bg-gradient-to-r from-gray-950 to-gray-900 min-h-screen max-h-ful text-white">
          Loading...
        </p>
      )}
      {isError && (
        <p className="ml-40 bg-gradient-to-r from-gray-950 to-gray-900 min-h-screen max-h-ful text-white">
          {String(error)}
        </p>
      )}
      {data && (
        <div className="relative bg-gradient-to-r from-gray-950 to-gray-900 min-h-screen max-h-full ml-40 text-white  flex justify-evenly overflow-y-hidden">
          <div className="  w-full min-h-screen max-h-full flex justify-center flex-col items-center align-middle">
            <div className=" p-6 w-[60%] h-[80%]  overflow-hidden ">
              <img
                className="object-cover h-full w-full 
            hover:scale-[1.02] transition-all duration-700 rounded-lg  shadow-md shadow-slate-800 "
                src="https://media.istockphoto.com/id/1213550611/photo/spaceman-in-the-surf.jpg?s=612x612&w=0&k=20&c=GP0HIuD4wXBdMXk-Oa8Fc9Z8J0BazUZ0l7s7ps69ajI="
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center gap-12 m-7 relative">
            <span className="text-3xl border-red-600 border-b-2 w-fit pb-3">
              Movie Detail
            </span>
            <div className="flex flex-col gap-6 w-[80%]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 mr-1 mb-1 inline"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
                : {data[0].MovieTitle}
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 mr-1 mb-1 inline"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Duration : {data[0].Duration}
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 mr-1 mb-1 inline"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                ShowDate : {data[0].ReleaseDate}
              </span>
              <p className="text-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 mr-1 mb-1 inline"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                  />
                </svg>
                Description : Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Neque dolorum numquam voluptatibus fugiat,
                accusantium totam quidem. Dolore dolor neque rem quis nulla!
                Officiis delectus perspiciatis perferendis a. Hic, quidem
                cupiditate?
              </p>
            </div>
            <Link
              to="/movie/cinemas"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 w-fit p-3 rounded-md absolute right-10 bottom-5 shadow-custom shadow-blue-500 hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
              Book Movie
            </Link>
          </div>
          <Link to="/movie/all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 absolute left-10 top-10 hover:w-9 hover:h-9 transition-all duration-300 ease-in-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </Link>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
