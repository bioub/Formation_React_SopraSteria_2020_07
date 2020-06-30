import { DECREMENT, INCREMENT, SET_STEP } from "./constants"

export function increment(payload) {
  return {
    type: INCREMENT,
    payload,
  }
}

export function decrement(payload) {
  return {
    type: DECREMENT,
    payload,
  }
}

export function setStep(payload) {
  return {
    type: SET_STEP,
    payload,
  }
}