import React, { useCallback } from 'react';
import TodoList from '../components/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredTodos, selectTodos } from '../store/selectors';
import { todoDelete, fetchTodos } from '../store/actions';

function TodoListContainer() {
  const items = useSelector(selectFilteredTodos);
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const onMount = useCallback(() => {
    // mise en cache
    if (todos.length) {
      return;
    }
    dispatch(fetchTodos());
  }, [dispatch, todos]);

  return (
    <TodoList
      items={items}
      onMount={onMount}
      onDelete={(item) => dispatch(todoDelete(item))}
    />
  );
}

export default TodoListContainer;
