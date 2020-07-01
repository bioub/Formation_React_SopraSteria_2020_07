import { DECREMENT, INCREMENT, SET_STEP } from "./constants"
import { createAction } from "@reduxjs/toolkit"

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const setStep = createAction(SET_STEP);

// pour un payload calculé (ex: TODO_ADD) :
// https://redux-toolkit.js.org/api/createAction#using-prepare-callbacks-to-customize-action-contents
// export const setStep = createAction(SET_STEP, (value) => ({
//   payload: value * 10
// }));
