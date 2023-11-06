import React from "react";

export default function SeatPriceCard() {
  return (
    <table className="w-full table-auto">
      <tr className=" border-white border-2">
        <th className="font-medium ">Seat No</th>
        <th className="font-medium">Seat Price</th>
        <th className="font-medium">Action</th>
      </tr>
      <tr className="text-center border-white border-2">
        <td className="p-4">A11</td>
        <td className="p-4">7000</td>
        <td className="p-4">
          <i className="fa-solid fa-trash text-red-600"></i>
        </td>
      </tr>
    </table>
  );
}
