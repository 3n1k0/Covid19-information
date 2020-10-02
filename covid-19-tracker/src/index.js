import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation.js";
import News from "./components/News";

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <News />
  </React.StrictMode>,
  document.getElementById("root")
);
