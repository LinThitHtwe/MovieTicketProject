import React from "react";

export default function CinemaRoomSkeleton() {
  return (
    <button
      className="p-2 animate-pulse ml-2 bg-gray-800 rounded-2xl shadow-custom shadow-slate-700
   hover:bg-gray-700 hover:scale-105 transition-all duration-300 ease-in-out inline-block "
    >
      Loading...
    </button>
  );
}
