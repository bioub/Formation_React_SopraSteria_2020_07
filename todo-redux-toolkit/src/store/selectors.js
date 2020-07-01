import { BUTTONS } from './constants';
import { createSelector } from '@reduxjs/toolkit';

export function selectNewTodo(state) {
  return state.newTodo;
}

export function selectTodos(state) {
  return state.todos;
}

export function selectFilter(state) {
  return state.filter;
}

export const selectItemsLeft = createSelector(selectTodos, (todos) => {
  console.log('call selectItemsLeft');
  return todos.filter((t) => !t.completed).length;
});

export const selectFilteredTodos = createSelector(
  selectTodos,
  selectFilter,
  (todos, filter) => {
    console.log('call selectFilteredTodos');
    if (filter === BUTTONS.ACTIVE) {
      return todos.filter((t) => !t.completed);
    }

    if (filter === BUTTONS.COMPLETED) {
      return todos.filter((t) => t.completed);
    }

    return todos;
  }
);
