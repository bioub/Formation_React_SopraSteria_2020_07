import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Hello from './components/Hello';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <nav> 
        <Link to="/">Home</Link>
        <Link to="/hello/Romain">Hello Romain</Link>
        <Link to="/hello/Toto">Hello Toto</Link>
        <Link to="/todos">Todos</Link>
      </nav>
      <Route path="/" component={Home} exact={true} />
      <Route path="/hello/:name" component={Hello} />
      <Route path="/todos" component={Todos}/>
    </div>
  );
}

export default App;
