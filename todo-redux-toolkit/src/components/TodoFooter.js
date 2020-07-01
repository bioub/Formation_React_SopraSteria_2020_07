import React from 'react';
import { BUTTONS } from '../store/constants';

function TodoFooter({
  itemsLeftCount = 0,
  filter = BUTTONS.ALL,
  onFilterChange = () => {},
}) {
  return (
    <div className="TodoFooter">
      <span>{itemsLeftCount} items left</span>
      {Object.entries(BUTTONS).map(([key, value]) => (
        <button
          key={key}
          disabled={value === filter}
          onClick={() => onFilterChange(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default TodoFooter;
