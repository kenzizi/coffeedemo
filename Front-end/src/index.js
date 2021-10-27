import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App.js";
import Routes from "./Components/Routes.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <App />
      <Routes />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
