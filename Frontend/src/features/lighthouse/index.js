import React, { useState } from 'react';
import useGlobal from 'src/store';
import Sidebar from '../Sidebar/index';
import Home from './Home';
import MetricComponent from './Metrics';
// import Compare from './Compare';
import './main.scss';

const Lighthouse = props => {
  const { comp, history } = props;
  const [globalState, globalActions] = useGlobal();
  const { toggle } = globalState;
  const map = {
    home: <Home history={history} />,
    performance: <MetricComponent history={history} metric={comp} />,
    accessibility: <MetricComponent history={history} metric={comp} />,
    best_practices: <MetricComponent history={history} metric={comp} />,
    p_w_a: <MetricComponent history={history} metric={comp} />,
    s_e_o: <MetricComponent history={history} metric={comp} />
    // compare: <Compare />
  };
  const graph = map[comp];
  return (
    <>
      <Sidebar />
      <div className={toggle ? 'main' : 'main-extend'}>{graph}</div>
    </>
  );
};

// const Lighthouse2 = React.memo(Lighthouse, (prevProps, nextProps) => {
//   console.log(prevProps, nextProps);
//   return true;
// });

export default Lighthouse;
