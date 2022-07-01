import RuleEditor from "./components/RuleEditor";
import DataEditor from "./components/DataEditor";
import './App.css';

function App() {
  return (
    <div className="flex-container" >
      <div>
        <h1>Rules</h1>
        <RuleEditor></RuleEditor>
      </div>
      <div className="flex-container vertical">
        <div>
          <h1>Data</h1>
          <DataEditor></DataEditor>
        </div>
        <div>
          <h1>Traces</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
