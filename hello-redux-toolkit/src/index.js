import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./store/reducers";

ReactDOM.render(
  <Provider
    store={configureStore({
      reducer: rootReducer,
      devTools: process.env.NODE_ENV === "development",
    })}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
