import React from 'react';
import { Redirect } from 'react-router-dom';
import Lighthouse from './features/lighthouse';
import Gatling from './features/gatling';
import AlertPage from './features/AlertPage';

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
    main: (history, toggle, setToggle) => <Lighthouse history={history} comp="bestPractices" />
  },
  {
    exact: true,
    path: '/lighthouse/seo',
    main: (history, toggle, setToggle) => <Lighthouse history={history} comp="seo" />
  },
  {
    exact: true,
    path: '/lighthouse/pwa',
    main: (history, toggle, setToggle) => <Lighthouse history={history} comp="pwa" />
  },
  {
    exact: true,
    path: '/lighthouse/recommendations',
    main: (history, toggle, setToggle) => <Lighthouse history={history} />
  },
  {
    exact: true,
    path: '/alerts',
    main: (history, toggle, setToggle) => <AlertPage history={history} />
  }
];

export default ROUTES;
