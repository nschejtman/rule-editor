import Editor from "@monaco-editor/react";


function RuleEditor() {
  const text = `rule-name:
  targetClass: apiContract.WebAPI
  propertyConstraints:
    core.version:
      minCount: 1`
  return (
    <Editor
     height="100vh"
     defaultLanguage="yaml"
     defaultValue={text}
   />
  );
}

export default RuleEditor;
