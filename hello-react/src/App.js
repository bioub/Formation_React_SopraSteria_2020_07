import React, { useState } from 'react';
import Hello from './Hello';
import Clock from './Clock';
import CounterV1 from './CounterV1';
import CounterV2 from './CounterV2';
import CounterV3 from './CounterV3';
import Select from './Select';

function App() {
  const [prenoms] = useState(['Romain', 'Jean']);
  const [prenom, setPrenom] = useState('Jean');
  return (
    <div className="App">
      <Hello firstName={prenom} />
      <Clock />
      <CounterV1 />
      <CounterV2 />
      <CounterV3 />
      <Select
        items={prenoms}
        selected={prenom}
        onSelected={(prenom) => setPrenom(prenom)}
      />
    </div>
  );
}

export default App;
