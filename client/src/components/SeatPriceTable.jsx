import React from "react";
import UseFetchData from "../hooks/useFetchData";

export default function SeatPriceTable({ existingSeats, selectSeat, roomId }) {
  const fetchUrl = `/Tbl_SeatPrice?RoomId=${roomId}`;
  const queryKey = ["seat-price", roomId];
  const { data } = UseFetchData(queryKey, fetchUrl);
  console.log(data.find((priceData) => priceData.RowName == "A"));
  return (
    <>
      {data && (
        <table className="w-full table-auto">
          <thead>
            <tr className=" border-white border-2 ">
              <th className="font-medium p-4">Seat No</th>
              <th className="font-medium p-4">Seat Price</th>
              <th className="font-medium p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {existingSeats.map((d) => (
              <tr className="text-center border-white border-2 hover:bg-gray-900">
                <td className="p-2">
                  {d.RowName}
                  {d.SeatNo}
                </td>
                <td className="p-2">
                  {
                    data.find((priceData) => priceData.RowName == d.RowName)
                      .SeatPrice
                  }
                </td>
                <td className="p-2">
                  <i
                    className="fa-solid fa-trash text-lg cursor-pointer text-red-600 hover:text-red-500 hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out"
                    onClick={() => selectSeat(d)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
