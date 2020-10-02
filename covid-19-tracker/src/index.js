import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation.js";
import News from "./components/News";
import Stats from "./components/Stats";

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Stats />
    <News />
  </React.StrictMode>,
  document.getElementById("root")
);
