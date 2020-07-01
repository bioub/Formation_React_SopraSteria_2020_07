import {
  NEWTODO_CHANGE,
  TODO_ADD,
  TODO_DELETE,
  FILTER_CHANGE,
} from './constants';
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
