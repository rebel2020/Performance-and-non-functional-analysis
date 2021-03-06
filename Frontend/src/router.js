import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import previousState from 'src/utilities/previousState';
import compare from 'src/utilities/compareObjects';
import ROUTES from './routeDetails';
import FetchData from './components/graphql/utils';
import { getLists, gatlingLIST } from './components/graphql/Queries';
// import parseFilterData from './utilities/parseList';
import useGlobal from './store';

const Router = () => {
  const [, globalActions] = useGlobal();
  const { setLists } = globalActions;
  const [data, setData] = useState({ lighthousedata: [] });
  const [query, setQuery] = useState(<></>);
  const prevState = previousState(data);
  const onMount = useRef(true);
  useEffect(() => {
    if (onMount.current) {
      setQuery(FetchData(getLists, setData));
      onMount.current = false;
      return;
    }
    if (!compare(prevState, data)) {
      setLists(data.parameters[0]);
    }
  });
  return (
    <BrowserRouter>
      {ROUTES.map((route, index) => {
        return (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            render={({ history }) => route.main(history)}
          />
        );
      })}
      {query}
    </BrowserRouter>
  );
};

export default Router;
