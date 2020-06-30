import React, { useState } from 'react';

function CounterHooks() {
  const [count, setCount] = useState(0); // count
  const [step, setStep] = useState(1); // step

  function increment() {
    console.log('increment');
    setCount(count + step);
  }

  function decrement() {
    console.log('decrement');
    setCount(count - step);
  }

  function handleChange(event) {
    console.log('handleChange');
    setStep(Number(event.target.value));
  }

  return (
    <div className="CounterHooks">
      <div>
        Step : <input type="number" value={step} onChange={handleChange}  />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div>Count : {count}</div>
    </div>
  );
}

export default CounterHooks;
