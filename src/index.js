import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import App2 from "./containers/App2";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // <React.StrictMode>
  //   {/* 靜態資料 */}
  //   {/* <App /> */}

  //   {/* 動態資料 */}
    <App2 title="React"/>,
  // {/* </React.StrictMode>, */}
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
