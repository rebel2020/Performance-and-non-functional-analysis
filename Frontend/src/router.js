import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Highcharts from "./features/lighthouse";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Highcharts} />
    </BrowserRouter>
  );
};

export default Router;
