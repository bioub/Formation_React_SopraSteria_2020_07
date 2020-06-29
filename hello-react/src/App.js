import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <Hello firstName="Romain" />
      {/* {Hello({firstName: 'Romain'})} */}
    </div>
  );
}

export default App;
