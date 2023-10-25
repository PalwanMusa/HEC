import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>count {count}</h2>
      <button onMouseEnter={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default Counter;

