import RuleEditor from "./components/RuleEditor";
import DataEditor from "./components/DataEditor";
import Report from "./components/Report";
import React from "react";
import "./App.css";
import validate from "./Validate";
import { dataSelector } from "./state/Data";
import { ruleSelector} from "./state/Rule";
import {update as updateReport} from "./state/Report";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const rawRule = useSelector(ruleSelector)
  const rawData = useSelector(dataSelector)

  const runValidation = () => {
    return async (dispatch, getState) => {
      const state = getState();
      const rule = ruleSelector(state)
      const data = dataSelector(state)
      try {
        const report = await validate(rule, data)
        dispatch(updateReport(report))
      } catch (err) {
        console.log("Error:", err)
        dispatch(updateReport([]))
      }
    }
  }

  return (
    <div className="flex-container">
      <div>
        <h1>Rule</h1>
        <button onClick={() => dispatch(runValidation())}>Run it</button>
        <RuleEditor/>
      </div>
      <div className="flex-container vertical">
        <div>
          <h1>Data</h1>
          <DataEditor/>
        </div>
        <div>
          <h1>Report</h1>
          <Report/>
        </div>
      </div>
    </div>
  );
}

export default App;
