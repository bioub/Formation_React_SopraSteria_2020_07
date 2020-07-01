import React from 'react';

function Hello({match}) {
  return (
    <div className="Hello">
      <h2>Hello {match.params.name}</h2>
    </div>
  );
}

export default Hello;
