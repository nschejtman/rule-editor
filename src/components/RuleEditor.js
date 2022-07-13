import Editor from "@monaco-editor/react";
import { useDispatch, useSelector } from "react-redux";
import { edit as editRule, ruleSelector } from "../state/Rule";

function RuleEditor(props) {
  const dispatch = useDispatch();

  const raw = useSelector(ruleSelector)

  const onRuleChange = (value) => dispatch(editRule(value));

  return (
    <Editor
      height="100vh"
      defaultLanguage="yaml"
      defaultValue={raw}
      onChange={onRuleChange}
    />
  );
}

export default RuleEditor;
