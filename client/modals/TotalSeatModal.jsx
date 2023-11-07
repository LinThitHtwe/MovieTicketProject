import React from "react";

export default function TotalSeatModal() {
  return (
    <div className="fixed z-20  w-full h-screen flex items-center justify-center bg-black">
      <div
        className="bg-white opacity-100  w-[50%]  rounded-lg p-6  shadow-md shadow-slate-600"
        style={{ height: "400px" }}
      >
        <div className="text-center ">
          <p>Modal Content</p>
          <button>Close Modal</button>
        </div>
      </div>
    </div>
  );
}
