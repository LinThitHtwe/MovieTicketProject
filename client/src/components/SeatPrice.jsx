import React from "react";
import SeatPriceTable from "./SeatPriceTable";

export default function SeatPrice({ roomId, selectSeat }) {
  const existingSeats =
    JSON.parse(localStorage.getItem(`selectedSeats${roomId}`)) || [];
  return (
    <>
      {existingSeats.length > 0 && (
        <div className="p-10 h-auto w-[95%]">
          <SeatPriceTable
            existingSeats={existingSeats}
            selectSeat={selectSeat}
          />
        </div>
      )}
    </>
  );
}
