import Editor from "@monaco-editor/react";
import { useState } from "react";

function RuleEditor(props) {
  const text = `targetClass: apiContract.WebAPI
propertyConstraints:
  core.version:
    minCount: 1`;
  useState(text);
  return (
    <Editor
      height="100vh"
      defaultLanguage="yaml"
      defaultValue={text}
      onMount={props.onMount}
      onChange={props.onChange}
    />
  );
}

export default RuleEditor;
