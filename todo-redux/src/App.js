import React from 'react';
import TodoFormContainer from './containers/TodoFormContainer';
import TodoListContainer from './containers/TodoListContainer';
import TodoFooterContainer from './containers/TodoFooterContainer';

function App() {
  return (
    <div className="App">
      <TodoFormContainer />
      <TodoListContainer />
      <TodoFooterContainer />
    </div>
  );
}

export default App;
