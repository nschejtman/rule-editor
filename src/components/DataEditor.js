import Editor from "@monaco-editor/react";
import { useState } from "react";

function DataEditor(props) {
  const text = `#%RAML 1.0
title: Demo API
version: 1.0
  `;
  useState(text);
  return (
    <Editor
      height="50%"
      defaultLanguage="yaml"
      defaultValue={text}
      onMount={props.onMount}
      onChange={props.onChange}
    />
  );
}

export default DataEditor;
