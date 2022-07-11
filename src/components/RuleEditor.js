import Editor from "@monaco-editor/react";

function RuleEditor(props) {
  const text = `targetClass: apiContract.WebAPI
propertyConstraints:
  core.version:
    minCount: 1`;
  return (
    <Editor
      height="100vh"
      defaultLanguage="yaml"
      defaultValue={text}
      onMount={props.onMount}
    />
  );
}

export default RuleEditor;
