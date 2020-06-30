import React from 'react';

function TodoItem({ item, onDelete = () => {} }) {
  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={item.completed} />
      <span>{item.title}</span>
      <button onClick={() => onDelete(item)}>-</button>
    </div>
  )
}

export default TodoItem;