import { useState } from "react";
import Child1 from "./Children/Child1";

export default function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Child1 />
      {/* <h1>{count}</h1> */}
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
