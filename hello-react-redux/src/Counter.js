import React, { Component } from "react";

function Counter({
  count = 0,
  step = 1,
  increment = () => {},
  decrement = () => {},
  setStep = () => {},
}) {
  return (
    <div className="Counter">
      <div>
        Step :{" "}
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <button onClick={() => increment(step)}>+</button>
        <button onClick={() => decrement(step)}>-</button>
      </div>
      <div>Count : {count}</div>
    </div>
  );
}

export default Counter;
