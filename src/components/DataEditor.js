import Editor from "@monaco-editor/react";
import {useDispatch, useSelector} from "react-redux";
import {edit as editData, dataSelector} from "../state/Data";

function DataEditor(props) {
  const dispatch = useDispatch();

  const raw = useSelector(dataSelector)

  const onDataChange = (value) => dispatch(editData(value));

  return (
    <Editor
      height="50%"
      defaultLanguage="yaml"
      defaultValue={raw}
      onChange={onDataChange}
    />
  );
}

export default DataEditor;
