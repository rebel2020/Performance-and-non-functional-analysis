import React from 'react';
import { Redirect } from 'react-router-dom';
import Lighthouse from './features/lighthouse';
import Gatling from './features/gatling';
import AlertPage from './features/AlertPage';
import setSearch from './utilities/search';
import { getDate } from './utilities/timeConversions';
import Recommendations from './features/lighthouse/Recommendations';

const today = new Date();
const ROUTES = [
  {
    exact: true,
    path: '/',
    main: history => (
      <Redirect
        to={{
          pathname: '/lighthouse',
          search: setSearch({
            date: new Date(getDate(today.getTime(), -1)).getTime(),
            toDate: new Date(getDate(today.getTime(), 1)).getTime() - 1
          })
        }}
      />
    )
  },
  {
    exact: true,
    path: '/gatling',
    main: history => <Gatling history={history} comp="gatling_stats" />
  },
  {
    exact: true,
    path: '/lighthouse',
    main: history => <Lighthouse history={history} comp="home" />
  },
  {
    exact: true,
    path: '/lighthouse/performance',
    main: history => <Lighthouse history={history} comp="performance" />
  },
  {
    exact: true,
    path: '/lighthouse/accessibility',
    main: history => <Lighthouse history={history} comp="accessibility" />
  },
  {
    exact: true,
    path: '/lighthouse/best_practices',
    main: history => <Lighthouse history={history} comp="best_practices" />
  },
  {
    exact: true,
    path: '/lighthouse/s_e_o',
    main: history => <Lighthouse history={history} comp="s_e_o" />
  },
  {
    exact: true,
    path: '/lighthouse/p_w_a',
    main: history => <Lighthouse history={history} comp="p_w_a" />
  },
  {
    exact: true,
    path: '/lighthouse/recommendations',
    main: history => <Recommendations history={history} comp="Recommendations" />
  },
  {
    exact: true,
    path: '/lighthouse/alerts',
    main: history => <AlertPage history={history} />
  }
];

export default ROUTES;
