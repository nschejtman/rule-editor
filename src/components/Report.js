import {conformsSelector, reportSelector} from "../state/Report";
import {useSelector} from "react-redux";

function Report(props) {
  // const report = useSelector(reportSelector)
  const conforms = useSelector(conformsSelector)

  if(conforms !== undefined) {
    return (
        <div id="report">Conforms: {conforms.toString()}</div>
    );
  } else {
    return (
        <div id="report">...</div>
    );
  }
}

export default Report;
