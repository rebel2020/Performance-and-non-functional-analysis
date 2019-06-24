import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Lighthouse from "./features/lighthouse";
import { BrowserRouter, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Lighthouse} />
    </BrowserRouter>
  );
};

export default Router;
