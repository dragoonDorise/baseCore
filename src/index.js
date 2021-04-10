import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./routers/AppRouter.js";
import reportWebVitals from "./reportWebVitals";
import "getbasecore/src/utils/reset/core_reset.scss";
import "./global.scss"; // Vars
import "getbasecore/src/utils/grid-layout/core_grid-layout.scss";
import { Typography } from "getbasecore/Atoms";

ReactDOM.render(
  <React.StrictMode>
    <Typography>
      <AppRouter />
    </Typography>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
