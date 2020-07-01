import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store/reducers';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={configureStore({ reducer: rootReducer })}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
