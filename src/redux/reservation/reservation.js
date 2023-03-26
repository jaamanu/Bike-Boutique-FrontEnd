// eslint-disable-next-line no-param-reassign
import { createSlice } from '@reduxjs/toolkit';

const reservationSlice = createSlice({

  name: 'reservation',
  initialState: {
    data: '',
  },
  reducers: {

    addReservation: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.data = action.payload;
    },
  },
});

export const { addReservation } = reservationSlice.actions;
export const selectReservationData = (state) => state.reservation.data;

export default reservationSlice.reducer;
