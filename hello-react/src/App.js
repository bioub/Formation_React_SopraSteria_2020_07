import React from 'react';
import Hello from './Hello';
import Clock from './Clock';
import CounterV1 from './CounterV1';
import CounterV2 from './CounterV2';
import CounterV3 from './CounterV3';

function App() {
  return (
    <div className="App">
      <Hello firstName="Romain" />
      <Clock />
      <CounterV1 />
      <CounterV2 />
      <CounterV3 />
    </div>
  );
}

export default App;
