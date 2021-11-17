import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./mocks";

import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();

export type AppDispatchType = typeof store.dispatch;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
