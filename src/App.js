import RuleEditor from "./components/RuleEditor";
import DataEditor from "./components/DataEditor";
import Report from "./components/Report";
import React, { useRef } from "react";
import "./App.css";
import validate from "./Validate";
import { edit as editData } from "./state/Data";
import { edit as editRule } from "./state/Rule";
import { useDispatch } from "react-redux";

function App() {
  const ruleEditorRef = useRef(null);
  const dataEditorRef = useRef(null);

  function handleRuleEditorDidMount(editor, monaco) {
    ruleEditorRef.current = editor;
  }

  function handleDataEditorDidMount(editor, monaco) {
    dataEditorRef.current = editor;
  }

  const dispatch = useDispatch();

  function handleRuleEditorChange(value, event) {
    dispatch(editRule(value));
  }

  function handleDataEditorChange(value, event) {
    dispatch(editData(value));
  }

  function runValidation() {
    validate(
      ruleEditorRef.current.getValue(),
      dataEditorRef.current.getValue()
    );
  }

  return (
    <div className="flex-container">
      <div>
        <h1>Rule</h1>
        <button onClick={runValidation}>Run it</button>
        <RuleEditor
          onMount={handleRuleEditorDidMount}
          onChange={handleRuleEditorChange}
        ></RuleEditor>
      </div>
      <div className="flex-container vertical">
        <div>
          <h1>Data</h1>
          <DataEditor
            onMount={handleDataEditorDidMount}
            onChange={handleDataEditorChange}
          ></DataEditor>
        </div>
        <div>
          <h1>Report</h1>
          <Report></Report>
        </div>
      </div>
    </div>
  );
}

export default App;
