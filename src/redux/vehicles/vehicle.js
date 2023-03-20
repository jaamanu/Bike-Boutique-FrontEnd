/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit"

const vehicleIdSlice = createSlice({
    name: "user",
    initialState: {
        vehicleSingle: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        vehicleStart: (state) => {
            state.isFetching = true
        },
        vehicleSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
        },
        vehicleFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
    }
})

export const { vehicleStart, vehicleSuccess, vehicleFailure } = vehicleIdSlice.actions;
export default vehicleIdSlice.reducer;