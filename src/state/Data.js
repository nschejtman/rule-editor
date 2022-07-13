import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  raw: "#%RAML 1.0\ntitle: Sales API\nversion: 1.0\n"
}

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    edit: (state, action) => {
      state.raw = action.payload;
    },
  },
});

export const { edit } = dataSlice.actions;

export const dataSelector = (state) => state.data.raw;

export default dataSlice.reducer;
