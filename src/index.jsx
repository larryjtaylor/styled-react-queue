import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import middlewareLogger from './middleware/middleware-logger';
import persistDataLocally from './middleware/persist-local-storage-data';
import styles from './styles/styles.css';

let retrievedState;
try {
  retrievedState = localStorage.getItem("reduxStore");
  if (retrievedState === null) {
    retrievedState = [];
  } else {
    retrievedState = JSON.parse(retrievedState);
  }
} catch (err) {
  retrievedState = [];
}

const store = createStore(reducer, retrievedState, applyMiddleware(middlewareLogger, persistDataLocally));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
    <App/>
    </HashRouter>
  </Provider>,
  document.getElementById("react-app-root")
);
