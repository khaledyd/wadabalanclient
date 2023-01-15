import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLot: null,
  loading: false,
  error: false,
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    lotStart: (state) => {
      state.loading = true;
    },
    lotSuccess: (state, action) => {
      state.loading = false;
      state.currentLot = action.payload;
    },
    lotFailure: (state) => {
      state.loading = false;
      state.error = true;
    },


    
  },
});

export const { lotStart, lotSuccess, lotFailure} =
eventSlice.actions;

export default eventSlice.reducer;