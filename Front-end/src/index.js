import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App.js";
import Routes from "./Components/Routes.js";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
