import React, { useState } from 'react';
import Hello from './Hello';
import Clock from './Clock';
import CounterV1 from './CounterV1';
import CounterV2 from './CounterV2';
import CounterV3 from './CounterV3';
import Select from './Select';
import ClockHooks from './ClockHooks';

function App() {
  const [prenoms] = useState(['Romain', 'Jean']);
  const [prenom, setPrenom] = useState('Jean');
  const [showClock, setShowClock] = useState(true);
  const [delay, setDelay] = useState(1000);
  const [format, setFormat] = useState('HH:mm:ss');
  return (
    <div className="App">
      <Hello firstName={prenom} />
      <button onClick={() => setShowClock(!showClock)}>
        {showClock ? 'Off' : 'On'}
      </button>
      {showClock && <Clock />}
      {showClock && <ClockHooks format={format} delay={delay} />}
      <p>
        Format :{' '}
        <input
          type="text"
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        />
      </p>
      <p>
        Délai :{' '}
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </p>
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
