import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, selectStep } from './store/selectors';
import { bindActionCreators } from 'redux';
import { decrement, setStep, increment } from './store/actions';

function CounterHooks() {
  const count = useSelector(selectCount); // count
  const step = useSelector(selectStep); // step
  const dispatch = useDispatch();

  const handleIncrement = bindActionCreators(increment, dispatch)
  const handleDecrement = bindActionCreators(decrement, dispatch)
  const handleChange = bindActionCreators(setStep, dispatch)

  return (
    <div className="CounterHooks">
      <div>
        Step : <input type="number" value={step} onChange={(e) => handleChange(Number(e.target.value))}  />
        <button onClick={() => handleIncrement(step)}>+</button>
        <button onClick={() => handleDecrement(step)}>-</button>
      </div>
      <div>Count : {count}</div>
    </div>
  );
}

export default CounterHooks;
