import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: null,
  reducers: {
    edit: (state, action) => {
      state.rule = action.payload;
    },
  },
});

export const { edit } = dataSlice.actions;
export const dataSelector = (state) => state.data;

export default dataSlice.reducer;
