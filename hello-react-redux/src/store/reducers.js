import { INCREMENT, DECREMENT, SET_STEP } from "./constants";
import { combineReducers } from "redux";

const initialState = { count: 0, step: 1 };

export function countReducer(state = initialState.count, { type, payload }) {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
}

export function stepReducer(state = initialState.step, { type, payload }) {
  switch (type) {
    case SET_STEP:
      return payload;
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  count: countReducer,
  step: stepReducer,
});