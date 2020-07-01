import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItemsLeft, selectFilter } from '../store/selectors';
import TodoFooter from '../components/TodoFooter';
import { filterChange } from '../store/actions';

function TodoListContainer() {
  const itemsLeftCount = useSelector(selectItemsLeft);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <TodoFooter itemsLeftCount={itemsLeftCount} filter={filter} onFilterChange={(filter) => dispatch(filterChange(filter))} />
  );
}

export default TodoListContainer;
