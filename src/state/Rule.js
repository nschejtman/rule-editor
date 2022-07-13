import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  source: "targetClass: apiContract.WebAPI\npropertyConstraints:\n  core.version:\n    minCount: 1",
  rego: ""
}

export const ruleSlice = createSlice({
  name: "rule",
  initialState,
  reducers: {
    updateSource: (state, action) => {
      state.source = action.payload;
    },
  },
});

export const { updateSource } = ruleSlice.actions;

export const ruleSourceSelector = (state) => state.rule.source;

export default ruleSlice.reducer;
