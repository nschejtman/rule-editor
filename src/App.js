import RuleEditor from "./components/RuleEditor";
import DataEditor from "./components/DataEditor";
import React, { useRef } from "react";
import './App.css';
import validate from "./Validate";


function App() {
  
  const ruleEditorRef = useRef(null);
  const dataEditorRef = useRef(null);

  function handleRuleEditorDidMount(editor, monaco) {
    ruleEditorRef.current = editor; 
  }

  function handleDataEditorDidMount(editor, monaco) {
    dataEditorRef.current = editor; 
  }

  function runValidation() {
    validate(ruleEditorRef.current.getValue(), dataEditorRef.current.getValue());
  }

  
  return (
    <div className="flex-container" >
      <div>
        <h1>Rule</h1>
        <button onClick={runValidation}>Run it</button>
        <RuleEditor onMount={handleRuleEditorDidMount}></RuleEditor>
      </div>
      <div className="flex-container vertical">
        <div>
          <h1>Data</h1>
          <DataEditor onMount={handleDataEditorDidMount}></DataEditor>
        </div>
        <div>
          <h1>Report</h1>
          <div id="report"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
