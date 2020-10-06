import React from "react";
import ReactDOM from "react-dom";
import App2 from "./AppCharts"
import registerServiceWorker from "./registerServiceWorker";


import App from "./App";
import TotalState from "./component/totalStat";
import ActiveState from "./component/activeState";
import ClosedState from "./component/closedState";

// ReactDOM.render(<NavBar />, document.getElementById("nav"));
ReactDOM.render( < TotalState / > , document.getElementById("totalState"));
ReactDOM.render( < ActiveState / > , document.getElementById("activeState"));
ReactDOM.render( < ClosedState / > , document.getElementById("closedState"));
ReactDOM.render( < App / > , document.getElementById("stateTable"));

ReactDOM.render( < App2 / > , document.getElementById("graphCards"));

registerServiceWorker();