import React from "react";

const MovieCard = () => {
  return (
    <div
      className="bg-gray-800 rounded-lg min-h-[350px] max-h-[350px] overflow-hidden
      min-w-[260px] max-w-[260px]
     shadow-md shadow-slate-700 hover:scale-[1.03] transition-all duration-500 ease-in-out cursor-pointer text-center text-white"
    >
      <img
        className="object-cover min-h-[80%] min-w-full max-h-[80%] hover:scale-[1.02] transition-all duration-700"
        src="https://media.istockphoto.com/id/1213550611/photo/spaceman-in-the-surf.jpg?s=612x612&w=0&k=20&c=GP0HIuD4wXBdMXk-Oa8Fc9Z8J0BazUZ0l7s7ps69ajI="
      />
      <div className="p-2 relative">
        <h2>Movie Card</h2>
        <span className="absolute right-1">140mins</span>
      </div>
    </div>
  );
};

export default MovieCard;
