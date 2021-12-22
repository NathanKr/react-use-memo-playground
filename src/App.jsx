import { useState } from "react";
import "./App.css";
import ParentProblem from "./components/ParentProblem";
import ParentWithMemo from "./components/ParentWithMemo";

function App() {
  const [isProblem, setIsProblem] = useState(true);
  return (
    <div className="App">
      <label>Toggle Problem \ Solution</label>{" "}
      <input type="checkbox" onClick={() => setIsProblem(!isProblem)} />
      {isProblem ? <ParentProblem /> : <ParentWithMemo />}
    </div>
  );
}

export default App;
