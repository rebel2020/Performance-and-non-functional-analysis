import React from 'react';
import { Redirect } from 'react-router-dom';
import Lighthouse from './features/lighthouse';
import Gatling from './features/gatling';
import AlertPage from './features/AlertPage';
import Recommendations from './features/lighthouse/Recommendations';

const ROUTES = [
  {
    exact: true,
    path: '/',
    main: (history, toggle, setToggle) => <Redirect to={{ pathname: '/lighthouse' }} />
  },
  {
    exact: true,
    path: '/gatling',
    main: (history, toggle, setToggle) => <Gatling history={history} comp="gatling_stats" />
  },
  {
    exact: true,
    path: '/lighthouse',
    main: (history, toggle, setToggle) => <Lighthouse history={history} comp="home" />
  },
  {
    exact: true,
    path: '/lighthouse/performance',
    main: (history, toggle, setToggle) => <Lighthouse history={history} comp="performance" />
  },
  {
    exact: true,
    path: '/lighthouse/accessibility',
    main: (history, toggle, setToggle) => <Lighthouse history={history} comp="accessibility" />
  },
  {
    exact: true,
    path: '/lighthouse/best_practices',
    main: (history, toggle, setToggle) => <Lighthouse history={history} comp="best_practices" />
  },
  {
    exact: true,
    path: '/lighthouse/s_e_o',
    main: (history, toggle, setToggle) => <Lighthouse history={history} comp="s_e_o" />
  },
  {
    exact: true,
    path: '/lighthouse/p_w_a',
    main: (history, toggle, setToggle) => <Lighthouse history={history} comp="p_w_a" />
  },
  {
    exact: true,
    path: '/lighthouse/Recommendations',
    main: (history, toggle, setToggle) => (
      <Recommendations history={history} comp="Recommendations" />
    )
  },
  {
    exact: true,
    path: '/lighthouse/alerts',
    main: (history, toggle, setToggle) => <AlertPage history={history} />
  }
];

export default ROUTES;
