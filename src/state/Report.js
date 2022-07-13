import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  report: [],
  conforms: undefined
}

export const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    update: (state, action) => {
      let report = action.payload;
      state.report = report;
      if (report.length) {
        state.conforms = report[0]["doc:encodes"][0].conforms
      } else {
        state.conforms = undefined
      }
    },
  },
});

export const { update } = reportSlice.actions;

export const reportSelector = (state) => state.report.report;

export const conformsSelector = (state) => state.report.conforms;

export default reportSlice.reducer;
