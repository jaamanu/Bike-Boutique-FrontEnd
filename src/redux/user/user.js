import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => ({ ...state, isFetching: true }),
    loginSuccess: (state, action) => {
      const token = action.payload;
      localStorage.setItem('token', JSON.stringify(token));
      const getToken = JSON.parse(localStorage.getItem('token'));

      return { ...state, isFetching: false, currentUser: getToken };
    },
    loginFailure: (state) => ({ ...state, isFetching: false, error: true }),
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
