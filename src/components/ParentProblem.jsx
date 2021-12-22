import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import './ParentProblem.css'

const ParentProblem = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);

  return (
    <div className="ParentProblem">
      <h1>Performance problem</h1>
      <p>Child1 is rendered <span>even</span> when its counter is <span>not changing !!!</span></p>
      <p>Child2 is rendered <span>even</span> when its counter is <span>not changing !!!</span></p>
      <button onClick={() => setCount1(count1 + 1)}>Increment Child1 counter</button>
      <Child1 count={count1} />
      <button onClick={() => setCount2(count2 + 1)}>Increment Child2 counter</button>
      <Child2 count={count2} />
    </div>
  );
};

export default ParentProblem;
