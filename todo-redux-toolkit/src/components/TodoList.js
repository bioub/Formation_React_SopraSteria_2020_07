import React, { memo, useEffect } from 'react';
import TodoItem from './TodoItem';

function TodoList({ items = [], onDelete = () => {}, onMount = () => {} }) {
  useEffect(() => {
    onMount();
  }, [onMount]);
  return (
    <div className="TodoList">
      {items.map((el) => (
        <TodoItem key={el.id} item={el} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default memo(TodoList);
