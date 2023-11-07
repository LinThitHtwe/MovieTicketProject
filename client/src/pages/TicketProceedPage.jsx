import React from "react";
import { useParams } from "react-router-dom";
import UseFetchData from "../hooks/useFetchData";

export default function TicketProceedPage() {
  const { id: movieId, roomId } = useParams();
  const movieQueryKey = ["movie", movieId];
  const movieFetchUrl = `/Tbl_MovieList?MovieId=${movieId}`;

  const seatPricefetchUrl = `/Tbl_SeatPrice?RoomId=${roomId}`;
  const seatPricequeryKey = ["seat-price", roomId];
  const { data: seatPrice } = UseFetchData(
    seatPricequeryKey,
    seatPricefetchUrl
  );

  const { isLoading, isError, error, data } = UseFetchData(
    movieQueryKey,
    movieFetchUrl
  );

  const existingSeats = JSON.parse(localStorage.getItem(`selectedSeats`)) || [];

  const buyTicket = (data) => {
    const purchasedTicket =
      JSON.parse(localStorage.getItem(`purchasedTicket`)) || [];

    purchasedTicket.push(data);
    localStorage.setItem(
      `purchasedTicket${roomId}`,
      JSON.stringify(purchasedTicket)
    );

    localStorage.setItem(`selectedSeats${roomId}`, JSON.stringify([]));
  };

  return (
    <div className="bg-gradient-to-r from-gray-950 to-gray-900 text-white min-h-screen max-h-full">
      <div className="flex justify-center content-center items-center h-screen w-screen overflow-hidden ">
        <div className="bg-gradient-to-r relative from-gray-700 to-gray-800 rounded-3xl h-[75%] w-[70%] p-4 shadow-slate-600 shadow-md flex">
          <div className=" p-6 max-w-[40%] min-w-[40%] h-full  overflow-hidden ">
            <img
              className="object-cover h-full w-full 
            hover:scale-[1.02] transition-all duration-700 rounded-lg  shadow-md shadow-slate-700 "
              src="https://media.istockphoto.com/id/1213550611/photo/spaceman-in-the-surf.jpg?s=612x612&w=0&k=20&c=GP0HIuD4wXBdMXk-Oa8Fc9Z8J0BazUZ0l7s7ps69ajI="
            />
          </div>
          <div className="p-1 mt-10 w-full">
            <span className="text-xl border-red-600 border-b-2 ">
              Proceed Ticket
            </span>
            <div className="mt-10 flex flex-col flex-wrap gap-6 max-w-[100%] min-w-[100%]">
              <span>
                <i className="fa-solid fa-film mr-3"></i>
                {data && data[0].MovieTitle}
              </span>
              <div className="flex w-full items-center gap-2">
                <i className="fa-solid fa-ticket"></i>
                <span>
                  {existingSeats.length !== 0 &&
                    existingSeats.map((es, index) => (
                      <span key={index}>
                        {es.RowName} {es.SeatNo}
                        {index < existingSeats.length - 1 ? ", " : ""}
                      </span>
                    ))}
                </span>
              </div>

              <span>Total Seats : {existingSeats.length}</span>
              {data && (
                <>
                  <span>
                    Total Amount :{" "}
                    {existingSeats.length === 0
                      ? "0 Ks"
                      : existingSeats
                          .reduce((total, es) => {
                            const seatPriceData = seatPrice.find(
                              (priceData) => priceData.RowName === es.RowName
                            );
                            if (seatPriceData) {
                              total += seatPriceData.SeatPrice;
                            }
                            return total;
                          }, 0)
                          .toLocaleString() + " Ks"}
                  </span>
                </>
              )}
            </div>
            <button
              className="absolute bottom-8 right-16 bg-white text-gray-950 p-3 rounded-xl shadow-md shadow-slate-500
            hover:-translate-y-1 transition-all duration-500 ease-in-out cursor-pointer opacity-80 hover:opacity-100 hover:scale-105"
              onClick={() => buyTicket(existingSeats)}
            >
              Buy Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
