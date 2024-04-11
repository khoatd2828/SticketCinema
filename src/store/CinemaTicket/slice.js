import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: [], // Array to store selected seats
}

const slice = createSlice({
    initialState,
    name: 'Cinema',
    reducers: {
        addCarts: (state, action) => {
            const selectedSeat = action.payload;
            const existingSeatIndex = state.carts.findIndex(seat => seat.soGhe === selectedSeat.soGhe);
            if (existingSeatIndex === -1) {
              state.carts.push(selectedSeat); // Add selected seat to carts array
            } else {
              state.carts.splice(existingSeatIndex, 1); // Remove selected seat if it already exists
            }
          },
        deleteCarts: (state, action) => {
        state.carts.splice(action.payload, 1); // Remove selected seat from carts array
        },
        resetCartAndMarkPaidSeats: (state) => {
            state.carts = []; // Reset carts array
        },
    }
})
export const {reducer: btTicketReducer, actions: btTicketAction} = slice