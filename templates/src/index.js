import React from "react";
import { render } from "react-dom";
import { Hot } from "./Hot";

document.addEventListener(
  "deviceready",
  () => {
    render(<Hot />, document.getElementById("app"));
  },
  false
);
