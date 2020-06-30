// équivalent à
// import redux from 'redux';
const redux = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SET_STEP = 'SET_STEP';

const initialState = { count: 0, step: 1 };

function countReducer(state = initialState.count, { type, payload }) {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
}

function stepReducer(state = initialState.step, { type, payload }) {
  switch (type) {
    case SET_STEP:
      return payload;
    default:
      return state;
  }
}

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: countReducer(state.count, action),
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: countReducer(state.count, action),
//       };
//     case SET_STEP:
//       return {
//         ...state,
//         step: stepReducer(state.step, action),
//       };
//     default:
//       return state;
//   }
// }

const reducer = redux.combineReducers({
  count: countReducer,
  step: stepReducer,
});

// const nextState = reducer(state, action);
// Pure Function
// - prédictive, ex : prédictive : sum(1, 2) === 3, pas prédictive : Math.random()
// - ne modifie pas ses params d'entrée
// - elle ne pas avoir de side-effect (requete http, appel à un api de storage)

/** @type {import('redux').Store} */
const store = redux.createStore(reducer);

console.log('initial state');
console.log(store.getState());

store.subscribe(() => {
  console.log('call callback subscribe, new state');
  console.log(store.getState());
});

store.dispatch({ type: INCREMENT, payload: 1 });
store.dispatch({ type: INCREMENT, payload: 1 });
store.dispatch({ type: DECREMENT, payload: 1 });
store.dispatch({ type: SET_STEP, payload: 10 });
store.dispatch({ type: INCREMENT, payload: 10 });
