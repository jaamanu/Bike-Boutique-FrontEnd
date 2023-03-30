import { createSlice } from '@reduxjs/toolkit';

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    data: '',
  },
  reducers: {
    addReservation: (state, action) => ({ ...state, data: action.payload }),
  },
});

export const { addReservation } = reservationSlice.actions;
export const selectReservationData = (state) => state.reservation.data;

export default reservationSlice.reducer;
