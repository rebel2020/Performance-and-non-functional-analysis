import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Lighthouse from './features/lighthouse';

const Router = () => {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to={{ pathname: '/lighthouse' }} />;
        }}
      />
      <Route
        exact
        path="/lighthouse"
        render={() => {
          return <Lighthouse comp="Home" />;
        }}
      />
      <Route
        exact
        path="/lighthouse/performance"
        render={() => {
          return <Lighthouse comp="performance" />;
        }}
      />
      <Route
        exact
        path="/lighthouse/accessibility"
        render={() => {
          return <Lighthouse comp="accessibility" />;
        }}
      />
    </BrowserRouter>
  );
};

export default Router;
