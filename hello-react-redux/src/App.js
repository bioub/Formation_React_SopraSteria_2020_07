import React, { useState } from "react";
import CounterContainer from "./CounterContainer";
import CounterHooks from "./CounterHooks";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <CounterHooks />
    </div>
  );
}

export default App;
