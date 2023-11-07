import React from "react";
import TicketCard from "../components/TicketCard";

export default function PurchasedTicketPage() {
  const purchasedTickets =
    JSON.parse(localStorage.getItem(`purchasedTickets`)) || [];
  return (
    <div className="relative bg-gradient-to-r from-gray-950 to-gray-900 min-h-screen max-h-full ml-40 text-white  flex justify-evenly overflow-y-hidden">
      <div className="grid grid-cols-4 gap-10 mt-6">
        {purchasedTickets.length != 0 &&
          purchasedTickets.map((purchasedTicket) => (
            <TicketCard purchasedTicket={purchasedTicket} />
          ))}
      </div>
    </div>
  );
}
