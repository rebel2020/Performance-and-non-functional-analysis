import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Lighthouse from './features/lighthouse';
import Gatling from './features/gatling/index';

const Router = () => {
  const [toggle, setToggle] = useState(false);
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
        render={props => {
          return <Redirect to={{ pathname: '/gatling' }} />;
        }}
      />
       <Route
        exact
        path="/gatling"
        render={({ history }) => {
          return (
            <Gatling
              history={history}
              comp="gatling_stats"
              toggle={toggle}
              setToggle={setToggle}
            />
          );
        }}
      />
      <Route
        exact
        path="/lighthouse"
        render={({ history }) => {
          return <Lighthouse history={history} comp="home" toggle={toggle} setToggle={setToggle} />;
        }}
      />
      <Route
        exact
        path="/lighthouse/performance"
        render={({ history }) => {
          return (
            <Lighthouse
              history={history}
              comp="performance"
              toggle={toggle}
              setToggle={setToggle}
            />
          );
        }}
      />
      <Route
        exact
        path="/lighthouse/accessibility"
        render={() => {
          return <Lighthouse comp="accessibility" toggle={toggle} setToggle={setToggle} />;
        }}
      />
    </BrowserRouter>
  );
};

export default Router;
