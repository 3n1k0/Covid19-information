import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation.js";
import News from "./components/News";
import Stats from "./components/Stats";
import Resources from "./components/Resources";

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Stats />
    <News />
    <Resources />
  </React.StrictMode>,
  document.getElementById("root")
);
