import React, { useState } from "react";

import '../components/Counter.css' 

function Counter() {
  const [counter, setCounter] = useState(0);
  function handleReset() {
    setCounter(0);
  }

  return (
    <div className="counter-container">
      <button onClick={() => setCounter(counter + 1)} className="increButton">Increment</button>
      <button onClick={() => setCounter(counter - 1)} className="decreButton">Decrement</button>
      <button onClick={handleReset} className="ResetButton" >Reset</button>
      <p>Count: {counter}</p>
    </div>
  );
}
export default Counter;
