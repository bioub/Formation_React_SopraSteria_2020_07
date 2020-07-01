import {
  NEWTODO_CHANGE,
  TODO_ADD,
  TODO_DELETE,
  BUTTONS,
  FILTER_CHANGE,
} from './constants';
import { combineReducers } from 'redux';

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

export function filterReducer(state = initialState.filter, { type, payload }) {
  switch (type) {
    case FILTER_CHANGE:
      return payload;
    default:
      return state;
  }
}

export function newTodoReducer(
  state = initialState.newTodo,
  { type, payload }
) {
  switch (type) {
    case NEWTODO_CHANGE:
      return payload;
    case TODO_ADD:
      return ''; // remet le champs à zéro
    default:
      return state;
  }
}

export function todosReducer(state = initialState.todos, { type, payload }) {
  switch (type) {
    case TODO_ADD:
      return [...state, payload];
    case TODO_DELETE:
      return state.filter((el) => el.id !== payload.id);
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  filter: filterReducer,
  newTodo: newTodoReducer,
  todos: todosReducer,
});
