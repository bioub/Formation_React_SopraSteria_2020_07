import React from 'react';

function TodoItem({ item, onDelete = () => {} }) {
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={item.completed} readOnly />
      <span>{item.title}</span>
      <button onClick={() => onDelete(item)}>-</button>
    </div>
  )
}

export default TodoItem;