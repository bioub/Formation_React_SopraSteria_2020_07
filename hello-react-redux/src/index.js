import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";

ReactDOM.render(
  <Provider store={configureStore({devTools: process.env.NODE_ENV === 'development'})}>
    <App />
  </Provider>,
  document.getElementById("root")
);
