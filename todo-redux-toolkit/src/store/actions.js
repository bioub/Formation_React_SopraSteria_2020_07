import {
  NEWTODO_CHANGE,
  TODO_ADD,
  TODO_DELETE,
  FILTER_CHANGE,
  FETCH_TODOS_REQUESTED,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
} from './constants';
import { getTodos } from "../api/todos";
import { createAction, nanoid } from '@reduxjs/toolkit';

export const newTodoChange = createAction(NEWTODO_CHANGE);
export const todoAdd = createAction(TODO_ADD, (title) => ({
  payload: {
    id: nanoid(),
    completed: false,
    title,
  },
}));
export const todoDelete = createAction(TODO_DELETE);
export const filterChange = createAction(FILTER_CHANGE);
export const fetchTodosRequested = createAction(FETCH_TODOS_REQUESTED);
export const fetchTodosSuccess = createAction(FETCH_TODOS_SUCCESS);
export const fetchTodosError = createAction(FETCH_TODOS_ERROR);

// redux-thunk
export function fetchTodos() {
  return (dispatch, ...args) => {
    dispatch(fetchTodosRequested());
    getTodos()
      .then((todos) => dispatch(fetchTodosSuccess(todos)))
      .catch((err) => dispatch(fetchTodosError(err)));
  };
}
