import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  raw: "targetClass: apiContract.WebAPI\npropertyConstraints:\n  core.version:\n    minCount: 1"
}

export const ruleSlice = createSlice({
  name: "rule",
  initialState,
  reducers: {
    edit: (state, action) => {
      state.raw = action.payload;
    },
  },
});

export const { edit } = ruleSlice.actions;

export const ruleSelector = (state) => state.rule.raw;

export default ruleSlice.reducer;
