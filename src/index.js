import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "./Assets/icon/css/all.css";
import "bootstrap/dist/js/bootstrap.js";
import { Provider } from "react-redux";
import Store from "./Component/store/Store";
import LoginApp from "./Component/Login/LoginApp";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (localStorage.getItem("firstname") == null) {
  root.render(
    <React.StrictMode>
      <Provider store={Store}>
        <LoginApp />
      </Provider>
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <Provider store={Store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
