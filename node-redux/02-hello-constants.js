// équivalent à
// import redux from 'redux';
const redux = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SET_STEP = 'SET_STEP';

function reducer(state = { count: 0, step: 1 }, { type, payload }) {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - payload,
      };
    case SET_STEP:
      return {
        ...state,
        step: payload,
      };
    default:
      return state;
  }
}

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
