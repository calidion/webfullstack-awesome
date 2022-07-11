import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Fork from "./Fork";
import Share from "./Share";
import "./scss/index.scss";
import Info from "./Info";
import SearchBar from "./SearchBar";

import 'bootstrap';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Fork />
    <Share/>
    <div className="container">
    <Info />
    <SearchBar/>
    </div>
    <App />
  </React.StrictMode>
);
