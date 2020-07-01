import React from 'react';
import TodoList from '../components/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredTodos } from '../store/selectors';
import { todoDelete } from '../store/actions';

function TodoListContainer() {
  const items = useSelector(selectFilteredTodos);
  const dispatch = useDispatch();

  return (
    <TodoList items={items} onDelete={(item) => dispatch(todoDelete(item))} />
  );
}

export default TodoListContainer;
