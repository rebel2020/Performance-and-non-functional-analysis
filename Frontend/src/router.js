import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Lighthouse from "./features/lighthouse";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Lighthouse} />
    </BrowserRouter>
  );
};

export default Router;
