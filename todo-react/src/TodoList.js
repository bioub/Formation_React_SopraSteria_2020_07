import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ items = [], onDelete = () => {}}) {
  return (
    <div className="TodoList">
      {items.map((el) => (
        <TodoItem key={el.id} item={el} onDelete={onDelete} />
      ))}
    </div>
  )
}

// useMemo

export default TodoList;