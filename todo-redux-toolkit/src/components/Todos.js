import React from 'react';
import TodoFormContainer from '../containers/TodoFormContainer';
import TodoListContainer from '../containers/TodoListContainer';
import TodoFooterContainer from '../containers/TodoFooterContainer';

function Todos() {
  return (
    <div className="Todos">
      <h2>Todos</h2>
      <TodoFormContainer />
      <TodoListContainer />
      <TodoFooterContainer />
    </div>
  );
}

export default Todos;
