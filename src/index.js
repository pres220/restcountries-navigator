import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./ScrollToTop";
import "./index.css";

ReactDOM.render(
  <BrowserRouter basename="/restcountries-navigator">
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
