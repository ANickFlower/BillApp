import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: null,
  date: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setAmount: (state, action) => {
      state.origin = action.payload;
    },
    setDate: (state, action) => {
      state.destination = action.payload;
    },
  },
});

export const { setAmount, setDate } = navSlice.actions;

export const selectAmount = (state) => state.nav.amount;
export const selectDate = (state) => state.nav.date;

export default navSlice.reducer;
