import React, { useState, useEffect } from "react";
import "../styles/App.css"

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="counterContainer">
            <div> Like: {count}</div>
            <div className="counter">
              <button onClick={() => setCount( count + 1 )}> Like </button>
            </div>
        </div>
    );
}
export default Counter;