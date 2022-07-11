import { ruleSelector } from "../state/Rule";
import { dataSelector } from "../state/Data";
import { useSelector } from "react-redux";
import validate from "../Validate";

function Report(props) {
  const rule = useSelector(ruleSelector);
  const data = useSelector(dataSelector);
  const result = validate(rule, data);

  return <div id="report">${result}</div>;
}

export default Report;
