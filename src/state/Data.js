import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  source: "#%RAML 1.0\ntitle: Sales API\nversion: 1.0\n",
  resolved: ""
}

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateSource: (state, action) => {
      state.source = action.payload;
    },
    updateResolved: (state, action) => {
      state.resolved = JSON.stringify(JSON.parse(action.payload), null, 2);
    },
  },
});

export const { updateSource, updateResolved } = dataSlice.actions;

export const dataSourceSelector = (state) => state.data.source;

export const dataResolvedSelector = (state) => state.data.resolved;

export default dataSlice.reducer;
