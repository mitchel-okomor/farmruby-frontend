import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./store/appContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
