import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Data";
import ruleReducer from "./Rule";
import reportReducer from "./Report";

export default configureStore({
  reducer: {
    rule: ruleReducer,
    data: dataReducer,
    report: reportReducer,
  },
});
