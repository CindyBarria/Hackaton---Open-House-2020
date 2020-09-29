import React, { useState } from "react";
import "../styles/App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const addLike = () => {
    let contador = count + 1;
    setCount(contador);
  };
  return (
    <div className="counterContainer">
      <img alt=""/>
      <div>{count}</div>
      <div className="counter">
        <button onClick={addLike}> Like </button>
      </div>
    </div>
  );
}
export default Counter;
