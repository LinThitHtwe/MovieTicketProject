import React from "react";

export default function TicketCard({ purchasedTicket }) {
  return (
    <>
      <div
        className="relative bg-gray-900 rounded-lg min-h-[350px] max-h-[350px] overflow-hidden
          min-w-[260px] max-w-[260px]
          shadow-md shadow-slate-800 hover:scale-[1.03] transition-all duration-500 ease-in-out
          cursor-pointer flex flex-col gap-4 pl-3 pt-3 text-white group"
      >
        <span className="text-center text-2xl">Ticket</span>
        <span>Movie Title</span>
        <span>Cinema Name</span>
        <span>Show Time</span>
        <span>Show Date</span>
        <span>Seats</span>
        <span>Total Seat</span>
        <span>Total Amount</span>
      </div>
    </>
  );
}
