import React from 'react';

function TodoForm({ value = '', onValueChange = () => {}, onTodoSubmit = () => {} }) {
  function handleSubmit(e) {
    e.preventDefault();
    onTodoSubmit(value);
  }

  // useCallback

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => onValueChange(e.target.value)} />
      <button>+</button>
    </form>
  )
}

export default TodoForm;