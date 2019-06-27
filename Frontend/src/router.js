import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
// import useGlobal from 'src/store';
import Lighthouse from './features/lighthouse';
import Gatling from './features/gatling/index';

const Router = () => {
  // const [globalState, globalActions] = useGlobal();
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={props => {
          return <Redirect to={{ pathname: '/lighthouse' }} />;
        }}
      />
      <Route
        exact
        path="/gatling"
        render={({ history }) => {
          return <Gatling history={history} comp="gatling_stats" />;
        }}
      />
      <Route
        exact
        path="/lighthouse"
        render={({ history }) => {
          return <Lighthouse history={history} comp="home" />;
        }}
      />
      <Route
        exact
        path="/lighthouse/performance"
        render={({ history }) => {
          return <Lighthouse history={history} comp="performance" />;
        }}
      />
      <Route
        exact
        path="/lighthouse/accessibility"
        render={({ history }) => {
          return <Lighthouse history={history} comp="accessibility" />;
        }}
      />
    </BrowserRouter>
  );
};

export default Router;
