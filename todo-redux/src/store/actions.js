import {
  NEWTODO_CHANGE,
  TODO_ADD,
  TODO_DELETE,
  FILTER_CHANGE,
} from './constants';

function createAction(type) {
  return function(payload) {
    return {
      type,
      payload
    }
  }
}

export const newTodoChange = createAction(NEWTODO_CHANGE);
// export function newTodoChange(payload) {
//   return {
//     type: NEWTODO_CHANGE,
//     payload,
//   };
// }

export function todoAdd(title) {
  return {
    type: TODO_ADD,
    payload: {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      completed: false,
      title,
    },
  };
}

export function todoDelete(payload) {
  return {
    type: TODO_DELETE,
    payload,
  };
}

export function filterChange(payload) {
  return {
    type: FILTER_CHANGE,
    payload,
  };
}
