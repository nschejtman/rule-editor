import RuleEditor from "./components/RuleEditor";
import DataEditor from "./components/DataEditor";
import Report from "./components/Report";
import React from "react";
import Button from '@mui/material/Button';
import "./App.css";
import validate from "./Validate";
import { dataSourceSelector } from "./state/Data";
import { ruleSourceSelector} from "./state/Rule";
import {update as updateReport} from "./state/Report";
import {updateResolved} from "./state/Data"
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const runValidation = () => {
    return async (dispatch, getState) => {
      const state = getState();
      const rule = ruleSourceSelector(state)
      const data = dataSourceSelector(state)
      try {
        const {report, resolved} = await validate(rule, data)
        dispatch(updateReport(report))
        dispatch(updateResolved(resolved))
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
        <RuleEditor/>
      </div>
      <div className="flex-container vertical">
        <div>
          <h1>Report</h1>
          <Button variant="outlined" onClick={() => {dispatch(runValidation());}}>Run</Button>
          <Report/>
        </div>
        <div>
          <h1>API Contract</h1>
          <DataEditor/>
        </div>

      </div>
    </div>
  );
}

export default App;
