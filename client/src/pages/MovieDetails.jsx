import React from "react";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  return (
    <div className="relative bg-gray-950 min-h-screen max-h-full ml-40 text-white  flex justify-evenly overflow-y-hidden">
      <div className="  w-full min-h-screen max-h-full flex justify-center flex-col items-center align-middle">
        <div className=" p-6 w-[60%] h-[80%]  overflow-hidden ">
          <img
            className="object-cover h-full w-full 
            hover:scale-[1.02] transition-all duration-700 rounded-lg  shadow-md shadow-slate-800 "
            src="https://media.istockphoto.com/id/1213550611/photo/spaceman-in-the-surf.jpg?s=612x612&w=0&k=20&c=GP0HIuD4wXBdMXk-Oa8Fc9Z8J0BazUZ0l7s7ps69ajI="
          />
        </div>
        <h1>Movie Title</h1>
      </div>
      <div className="w-full flex flex-col justify-center gap-12 m-7 relative">
        <span className="text-3xl border-red-600 border-b-2 w-fit pb-3">
          Movie Detail
        </span>
        <div className="flex flex-col gap-6 w-[80%]">
          <span>Title : Something</span>
          <span>Duration : Something</span>
          <span>ShowDate : Something</span>
          <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque dolorum numquam voluptatibus fugiat, accusantium totam
            quidem. Dolore dolor neque rem quis nulla! Officiis delectus
            perspiciatis perferendis a. Hic, quidem cupiditate?
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
  );
};

export default MovieDetails;
