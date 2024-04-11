import React, { useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { btTicketAction } from "../store/CinemaTicket/slice";
import ReactModal from 'react-modal';

export const Cart = () => {
  const { carts} = useSelector((state) => state.btTicketReducer);
  const dispatch = useDispatch();

  const [ten, setTen] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const total = carts.reduce((acc, item) => acc + item.gia, 0);
  const handlePayment = () => {
    dispatch(btTicketAction.resetCartAndMarkPaidSeats());
    setModalIsOpen(true);
  };

  const handleBookedSeats = () => {
    const bookedSeats = document.querySelectorAll('.ghe');
    bookedSeats.forEach(seat => {
      if (carts.some(cart => cart.soGhe === seat.textContent)) {
        seat.classList.add('booked');
      }
    });
  };
  return (
    <div>
      <span className='text-white fs-5 fw-bold'>Tên</span>
      <div className='d-flex mb-3'>
        <input 
              type="text" 
              placeholder="Nhập tên" 
              value={ten} 
              onChange={(e) => setTen(e.target.value)}
              className='form-control mb-3' 
              style={{ width: 500 }}
          />
      </div>
      <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '0 10px' }}>
        <thead className="bg-none">
          <tr>
            <th>Tên</th>
            <th>Số Ghế</th>
            <th>Giá</th>
            <th>Huỷ</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((item, index) => {
            return (
              <tr key={index}>
                <td>{ten}</td>
                <td>{item.soGhe}</td>
                <td>{item.gia}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(btTicketAction.deleteCarts(index));
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan="1" className="fw-bold">
              Tổng:
            </td>
            <td colSpan="3">{total}</td>
          </tr>
        </tbody>
      </table>

      <div>
        <button
          type="button"
          className="btn"
          style={{ backgroundColor: "#000", color: "white" }}
          onClick={handlePayment}
        >
          Thanh toán
        </button>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          onAfterOpen={handleBookedSeats}
          className="modal-content"
        >
          <div className="modal-header">
            <h1 className="modal-title ">Đặt vé thành công!</h1>
          </div>
          <div className="modal-body text-center">
            Chúc bạn xem phim vui vẻ!
          </div>
          <div className="modal-footer">
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
      </ReactModal>

      </div>
    </div>
  );
};
