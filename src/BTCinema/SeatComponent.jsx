import {React, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { btTicketAction } from "../store/CinemaTicket/slice";
import cn from "classnames";

export const SeatComponent = ({ seatList }) => {
  const { carts} = useSelector((state) => state.btTicketReducer);

  const [isBookingStarted, setIsBookingStarted] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleSeatClick = (seat) => {
    if (isBookingStarted) {
      dispatch(btTicketAction.addCarts(seat));
    }
  };

  const handleStartBooking = () => {
    setIsBookingStarted(true);
    setIsBtnDisabled(true);
  };
  const dispatch = useDispatch();
  return (
    <div className="container mt-5">
      <div className="screen mb-5">
        <h3 className="text-white text-center">Màn hình</h3>
      </div>
      <div className="seat text-center justify-content-around">
        {seatList.map((seatRow, rowIndex) =>
          seatRow.hang !== "" ? (
            <div className="row" key={rowIndex}>
              <div className="col-1 firstChar">{seatRow.hang}</div>
              <div className="container col-11">
                <div className="row">
                  {seatRow.danhSachGhe.map((seat, seatIndex) => {
                    const isSelected = carts.some(
                      (selectedSeat) => selectedSeat.soGhe === seat.soGhe
                    );
                    return (
                      <div
                        className={cn(
                          "ghe text-black text-center",
                          {
                            "bg-success": isSelected
                          }
                        )}
                        key={seatIndex}
                        onClick={() => handleSeatClick(seat)}
                      >
                        {seat.soGhe}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="row" key={rowIndex}>
              <div className="col-1"></div>
              <div className="container col-11">
                <div className="row">
                  {seatRow.danhSachGhe.map((seat, seatIndex) => (
                    <div className="rowNumber ghe_first" key={seatIndex}>
                      {seat.soGhe}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="text-center mt-3">
        <button
          type="button"
          className="btn btn-warning position-absolute" style={{top: "44.6%", left: "77.5%"}}
          onClick={handleStartBooking}
          disabled={isBtnDisabled}
        >
          Bắt đầu đặt vé
        </button>
      </div>
    </div>
  );
};
