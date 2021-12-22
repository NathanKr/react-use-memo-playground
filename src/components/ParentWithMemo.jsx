import { useMemo, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import './ParentWithMemo.css'

const ParentWithMemo = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);

  const child1WithMemo = useMemo(() => <Child1 count={count1} />, [count1]);
  const child2WithMemo = useMemo(() => <Child2 count={count2} />, [count2]);

  return (
    <div className='ParentWithMemo'>
      <h1>ParentWithMemo</h1>
      <p>Child1 is rendered <span>only</span> when its counter <span>is changing !!!</span></p>
      <p>Child2 is rendered <span>only</span> when its counter <span>is changing !!!</span></p>
      <button onClick={() => setCount1(count1 + 1)}>Increment Child1 counter</button>
      {child1WithMemo}
      <button onClick={() => setCount2(count2 + 1)}>Increment Child2 counter</button>
      {child2WithMemo}
    </div>
  );
};

export default ParentWithMemo;
