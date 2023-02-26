import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MoviesContext from "./utils/context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoviesContext>
      <App />
    </MoviesContext>
  </React.StrictMode>
);
