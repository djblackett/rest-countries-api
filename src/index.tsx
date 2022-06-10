import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/app/store";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/rest-countries-api">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
