import { createSlice } from "@reduxjs/toolkit";

export const ruleSlice = createSlice({
  name: "rule",
  initialState: null,
  reducers: {
    edit: (state, action) => {
      state.rule = action.payload;
    },
  },
});

export const { edit } = ruleSlice.actions;
export const ruleSelector = (state) => state.rule;

export default ruleSlice.reducer;
