import React, { useState } from 'react';
import useGlobal from 'src/store';

import Sidebar from '../Sidebar/index';
// import './main.scss';
import MetricComponent from './Gatling_stats/index';

const Gatling = props => {
  const { comp, history } = props;
  const [globalState, globalActions] = useGlobal();
  const { toggle } = globalState;
  const map = {
    gatling_stats: <MetricComponent history={history} metric={comp} />
  };
  const graph = map[comp];
  return (
    <>
      <Sidebar history={history} />
      <div className={toggle ? 'main' : 'main-extend'}>{graph}</div>
    </>
  );
};

export default Gatling;
