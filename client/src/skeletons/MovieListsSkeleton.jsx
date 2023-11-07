import React from "react";

export default function MovieListsSkeleton() {
  return (
    <div className="relative animate-pulse bg-gray-900 rounded-lg min-h-[350px] max-h-[350px] min-w-[260px] max-w-[260px] shadow-md shadow-slate-800 transition-all duration-500 ease-in-out cursor-pointer text-center text-white group skeleton-animation">
      <div className="min-h-[100%] min-w-full max-h-[100%] "></div>
    </div>
  );
}
