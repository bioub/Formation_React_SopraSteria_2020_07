import {
  NEWTODO_CHANGE,
  TODO_ADD,
  TODO_DELETE,
  BUTTONS,
  FILTER_CHANGE,
} from './constants';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  filter: BUTTONS.COMPLETED,
  newTodo: 'Achet',
  todos: [
    {
      id: 1,
      title: 'Acheter du pain',
      completed: false,
    },
    {
      id: 2,
      title: 'Aller au sport',
      completed: true,
    },
    {
      id: 3,
      title: 'Utiliser Redux',
      completed: false,
    },
  ],
};

export const filterReducer = createReducer(initialState.filter, {
  [FILTER_CHANGE]: (state, { payload }) => payload,
});

export const newTodoReducer = createReducer(initialState.newTodo, {
  [NEWTODO_CHANGE]: (state, { payload }) => payload,
  [TODO_ADD]: () => '',
});

export const todosReducer = createReducer(initialState.todos, {
  [TODO_ADD]: (state, { payload }) => [...state, payload],
  [TODO_DELETE]: (state, { payload }) =>
    state.filter((el) => el.id !== payload.id),
});

export const rootReducer = {
  filter: filterReducer,
  newTodo: newTodoReducer,
  todos: todosReducer,
};
