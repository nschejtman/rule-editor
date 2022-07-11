import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Data";
import ruleReducer from "./Rule";

export default configureStore({
  reducer: {
    rule: ruleReducer,
    data: dataReducer,
  },
});
