import { INCREMENT, DECREMENT, SET_STEP } from "./constants";
import { createReducer } from "@reduxjs/toolkit";

const initialState = { count: 0, step: 1 };

export const countReducer = createReducer(initialState.count, {
  [INCREMENT]: (state, { payload }) => state + payload,
  [DECREMENT]: (state, { payload }) => state - payload,
});

// export function countReducer(state = initialState.count, { type, payload }) {
//   switch (type) {
//     case INCREMENT:
//       return state + payload;
//     case DECREMENT:
//       return state - payload;
//     default:
//       return state;
//   }
// }

export const stepReducer = createReducer(initialState.step, {
  [SET_STEP]: (state, { payload }) => payload,
});

// export function stepReducer(state = initialState.step, { type, payload }) {
//   switch (type) {
//     case SET_STEP:
//       return payload;
//     default:
//       return state;
//   }
// }

export const rootReducer = {
  count: countReducer,
  step: stepReducer,
};