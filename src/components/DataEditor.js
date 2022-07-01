import Editor from "@monaco-editor/react";


function DataEditor() {
  const text = `#%RAML 1.0
title: Demo API
version: 1.0
  `
  return (
    <Editor
     height="50%"
     defaultLanguage="yaml"
     defaultValue={text}
   />
  );
}

export default DataEditor;
