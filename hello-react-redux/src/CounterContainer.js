import React from "react";
import Counter from "./Counter";
import { connect } from "react-redux";
import { decrement, setStep, increment } from "./store/actions";
import { selectCount, selectStep } from "./store/selectors";

// function CounterContainer() {
//   // interroge le store
//   const count = store.subs()
//   return <Counter count={count} />
// }

function mapStateToProps(state) {
  return {
    count: selectCount(state),
    step: selectStep(state),
  };
}


function mapDispatchToProps(dispatch) {
  return {
    increment(step) {
      dispatch(increment(step));
    },
    decrement(step) {
      dispatch(decrement(step));
    },
    setStep(step) {
      dispatch(setStep(step));
    },
  };
}

// Higher Order Component
const enhance = connect(mapStateToProps, mapDispatchToProps);
const CounterContainer = enhance(Counter);

export default CounterContainer;
