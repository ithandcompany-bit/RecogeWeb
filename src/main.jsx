import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import "./styles/variables.css";
import "./styles/theme.css";



ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)