import React from "react";

export default function Seat({ data, selectSeat, roomId }) {
  const existingSeats =
    JSON.parse(localStorage.getItem(`selectedSeats${roomId}`)) || [];

  return (
    <>
      <div className="flex justify-center">
        {data &&
          data
            .filter((d) => d.RowName === "A")
            .map((d, index) => (
              <div
                key={index}
                className={`
    ${
      d.SeatNo === null
        ? "opacity-0 cursor-default"
        : "border-white border-2 cursor-pointer"
    }
    rounded-xl inline-block p-1 ml-3 min-w-[38px] max-w-[38px] min-h-[38px] max-h-[38px] hover:bg-white transition-all duration-300 ease-in-out hover:text-gray-950 hover:scale-[1.02] hover:-translate-y-1
    ${
      d.SeatNo === null
        ? ""
        : existingSeats.some((seat) => seat.SeatId === d.SeatId)
        ? "bg-white text-gray-950"
        : ""
    }`}
                onClick={() => selectSeat(d)}
              >
                <div className="flex justify-center items-center">
                  <span
                    className={`text-sm inline-block ${
                      d.SeatNo === null ? "opacity-0" : ""
                    }`}
                  >
                    {d.RowName}
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
      </div>
      <div className="flex justify-center">
        {data &&
          data
            .filter((d) => d.RowName === "B")
            .map((d, index) => (
              <div
                key={index}
                className={`
    ${
      d.SeatNo === null
        ? "opacity-0 cursor-default"
        : "border-white border-2 cursor-pointer"
    }
    rounded-xl mt-3 inline-block p-1 ml-3 min-w-[38px] max-w-[38px] min-h-[38px] max-h-[38px] hover:bg-white transition-all duration-300 ease-in-out hover:text-gray-950 hover:scale-[1.02] hover:-translate-y-1
    ${
      d.SeatNo === null
        ? ""
        : existingSeats.some((seat) => seat.SeatId === d.SeatId)
        ? "bg-white text-gray-950"
        : ""
    }`}
                onClick={() => selectSeat(d)}
              >
                <div className="flex justify-center items-center">
                  <span
                    className={`text-sm inline-block ${
                      d.SeatNo === null ? "opacity-0" : ""
                    }`}
                  >
                    {d.RowName}
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
      </div>

      <div className="flex justify-center">
        {data &&
          data
            .filter((d) => d.RowName === "C")
            .map((d, index) => (
              <div
                key={index}
                className={`
    ${
      d.SeatNo === null
        ? "opacity-0 cursor-default"
        : "border-white border-2 cursor-pointer"
    }
    rounded-xl mt-3  inline-block p-1 ml-3 min-w-[38px] max-w-[38px] min-h-[38px] max-h-[38px] hover:bg-white transition-all duration-300 ease-in-out hover:text-gray-950 hover:scale-[1.02] hover:-translate-y-1
    ${
      d.SeatNo === null
        ? ""
        : existingSeats.some((seat) => seat.SeatId === d.SeatId)
        ? "bg-white text-gray-950"
        : ""
    }`}
                onClick={() => selectSeat(d)}
              >
                <div className="flex justify-center items-center">
                  <span
                    className={`text-sm inline-block ${
                      d.SeatNo === null ? "opacity-0" : ""
                    }`}
                  >
                    {d.RowName}
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
      </div>
      <div className="flex justify-center">
        {data &&
          data
            .filter((d) => d.RowName === "D")
            .map((d, index) => (
              <div
                key={index}
                className={`
    ${
      d.SeatNo === null
        ? "opacity-0 cursor-default"
        : "border-white border-2 cursor-pointer"
    }
    rounded-xl mt-3 inline-block p-1 ml-3 min-w-[38px] max-w-[38px] min-h-[38px] max-h-[38px] hover:bg-white transition-all duration-300 ease-in-out hover:text-gray-950 hover:scale-[1.02] hover:-translate-y-1
    ${
      d.SeatNo === null
        ? ""
        : existingSeats.some((seat) => seat.SeatId === d.SeatId)
        ? "bg-white text-gray-950"
        : ""
    }`}
                onClick={() => selectSeat(d)}
              >
                <div className="flex justify-center items-center">
                  <span
                    className={`text-sm inline-block ${
                      d.SeatNo === null ? "opacity-0" : ""
                    }`}
                  >
                    {d.RowName}
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
      </div>

      <div className="flex justify-center">
        {data &&
          data
            .filter((d) => d.RowName === "E")
            .map((d, index) => (
              <div
                key={index}
                className={`
    ${
      d.SeatNo === null
        ? "opacity-0 cursor-default"
        : "border-white border-2 cursor-pointer"
    }
    rounded-xl mt-3 inline-block p-1 ml-3 min-w-[38px] max-w-[38px] min-h-[38px] max-h-[38px] hover:bg-white transition-all duration-300 ease-in-out hover:text-gray-950 hover:scale-[1.02] hover:-translate-y-1
    ${
      d.SeatNo === null
        ? ""
        : existingSeats.some((seat) => seat.SeatId === d.SeatId)
        ? "bg-white text-gray-950"
        : ""
    }`}
                onClick={() => selectSeat(d)}
              >
                <div className="flex justify-center items-center">
                  <span
                    className={`text-sm inline-block ${
                      d.SeatNo === null ? "opacity-0" : ""
                    }`}
                  >
                    {d.RowName}
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
      </div>

      <div className=" flex justify-center">
        {data &&
          data
            .filter((d) => d.RowName === "F")
            .map((d, index) => (
              <div
                key={index}
                className={`
    ${
      d.SeatNo === null
        ? "opacity-0 cursor-default"
        : "border-white border-2 cursor-pointer"
    }
    rounded-xl mt-3 inline-block p-1 ml-3 ${
      d.SeatType == "couple"
        ? "min-w-[68px] max-w-[68px]"
        : "min-w-[38px] max-w-[38px]"
    } min-h-[38px] max-h-[38px] hover:bg-white transition-all duration-300 ease-in-out hover:text-gray-950 hover:scale-[1.02] hover:-translate-y-1
    ${
      d.SeatNo === null
        ? ""
        : existingSeats.some((seat) => seat.SeatId === d.SeatId)
        ? "bg-white text-gray-950"
        : ""
    }`}
                onClick={() => selectSeat(d)}
              >
                <div className="flex justify-center items-center">
                  <span
                    className={`text-sm inline-block ${
                      d.SeatNo === null ? "opacity-0" : ""
                    }`}
                  >
                    {d.RowName}
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
      </div>

      <div className="flex justify-center">
        {data &&
          data
            .filter((d) => d.RowName === "G")
            .map((d, index) => (
              <div
                key={index}
                className={`
    ${
      d.SeatNo === null
        ? "opacity-0 cursor-default"
        : "border-white border-2 cursor-pointer"
    }
    rounded-xl mt-3 inline-block p-1 ml-3 ${
      d.SeatType == "couple"
        ? "min-w-[68px] max-w-[68px]"
        : "min-w-[38px] max-w-[38px]"
    }  min-h-[38px] max-h-[38px] hover:bg-white transition-all duration-300 ease-in-out hover:text-gray-950 hover:scale-[1.02] hover:-translate-y-1
    ${
      d.SeatNo === null
        ? ""
        : existingSeats.some((seat) => seat.SeatId === d.SeatId)
        ? "bg-white text-gray-950"
        : ""
    }`}
                onClick={() => selectSeat(d)}
              >
                <div className="flex justify-center items-center">
                  <span
                    className={`text-sm inline-block ${
                      d.SeatNo === null ? "opacity-0" : ""
                    }`}
                  >
                    {d.RowName}
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
      </div>

      <div className="flex justify-center">
        {data &&
          data
            .filter((d) => d.RowName === "H")
            .map((d, index) => (
              <div
                key={index}
                className={`
    ${
      d.SeatNo === null
        ? "opacity-0 cursor-default"
        : "border-white border-2 cursor-pointer"
    }
    rounded-xl mt-3 inline-block p-1 ml-3 ${
      d.SeatType == "couple"
        ? "min-w-[68px] max-w-[68px]"
        : "min-w-[38px] max-w-[38px]"
    }  min-h-[38px] max-h-[38px] hover:bg-white transition-all duration-300 ease-in-out hover:text-gray-950 hover:scale-[1.02] hover:-translate-y-1
    ${
      d.SeatNo === null
        ? ""
        : existingSeats.some((seat) => seat.SeatId === d.SeatId)
        ? "bg-white text-gray-950"
        : ""
    }`}
                onClick={() => selectSeat(d)}
              >
                <div className="flex justify-center items-center">
                  <span
                    className={`text-sm inline-block ${
                      d.SeatNo === null ? "opacity-0" : ""
                    }`}
                  >
                    {d.RowName}
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
      </div>

      <div className="flex justify-center">
        {data &&
          data
            .filter((d) => d.RowName === "I")
            .map((d, index) => (
              <div
                key={index}
                className={`
    ${
      d.SeatNo === null
        ? "opacity-0 cursor-default"
        : "border-white border-2 cursor-pointer"
    }
    rounded-xl mt-3 inline-block p-1 ml-3 ${
      d.SeatType == "couple"
        ? "min-w-[68px] max-w-[68px]"
        : "min-w-[38px] max-w-[38px]"
    }  min-h-[38px] max-h-[38px] hover:bg-white transition-all duration-300 ease-in-out hover:text-gray-950 hover:scale-[1.02] hover:-translate-y-1
    ${
      d.SeatNo === null
        ? ""
        : existingSeats.some((seat) => seat.SeatId === d.SeatId)
        ? "bg-white text-gray-950"
        : ""
    }`}
                onClick={() => selectSeat(d)}
              >
                <div className="flex justify-center items-center">
                  <span
                    className={`text-sm inline-block ${
                      d.SeatNo === null ? "opacity-0" : ""
                    }`}
                  >
                    {d.RowName}
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
      </div>

      <div className="flex justify-center">
        {data &&
          data
            .filter((d) => d.RowName === "J")
            .map((d, index) => (
              <div
                key={index}
                className={`
    ${
      d.SeatNo === null
        ? "opacity-0 cursor-default"
        : "border-white border-2 cursor-pointer"
    }
    rounded-xl mt-3 inline-block p-1 ml-3 ${
      d.SeatType == "couple"
        ? "min-w-[68px] max-w-[68px]"
        : "min-w-[38px] max-w-[38px]"
    }  min-h-[38px] max-h-[38px] hover:bg-white transition-all duration-300 ease-in-out hover:text-gray-950 hover:scale-[1.02] hover:-translate-y-1
    ${
      d.SeatNo === null
        ? ""
        : existingSeats.some((seat) => seat.SeatId === d.SeatId)
        ? "bg-white text-gray-950"
        : ""
    }`}
                onClick={() => selectSeat(d)}
              >
                <div className="flex justify-center items-center">
                  <span
                    className={`text-sm inline-block ${
                      d.SeatNo === null ? "opacity-0" : ""
                    }`}
                  >
                    {d.RowName}
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
      </div>

      <div className="flex justify-center">
        {data &&
          data
            .filter((d) => d.RowName === "K")
            .map((d, index) => (
              <div
                key={index}
                className={`
    ${
      d.SeatNo === null
        ? "opacity-0 cursor-default"
        : "border-white border-2 cursor-pointer"
    }
    rounded-xl mt-3 inline-block p-1 ml-3 ${
      d.SeatType == "couple"
        ? "min-w-[68px] max-w-[68px]"
        : "min-w-[38px] max-w-[38px]"
    }  min-h-[38px] max-h-[38px] hover:bg-white transition-all duration-300 ease-in-out hover:text-gray-950 hover:scale-[1.02] hover:-translate-y-1
    ${
      d.SeatNo === null
        ? ""
        : existingSeats.some((seat) => seat.SeatId === d.SeatId)
        ? "bg-white text-gray-950"
        : ""
    }`}
                onClick={() => selectSeat(d)}
              >
                <div className="flex justify-center items-center">
                  <span
                    className={`text-sm inline-block ${
                      d.SeatNo === null ? "opacity-0" : ""
                    }`}
                  >
                    {d.RowName}
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}
