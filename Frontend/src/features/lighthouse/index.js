import React, { useState } from 'react';
import Sidebar from '../Sidebar/index';
import Home from './Home';
import MetricComponent from './Metrics';
import './main.scss';

const Lighthouse = props => {
  const { comp, toggle, setToggle, history } = props;
  const map = {
    home: <Home />,

    performance: <MetricComponent history={history} metric={comp} />,
    accessibility: <MetricComponent history={history} metric={comp} />
  };
  const graph = map[comp];
  return (
    <>
      <Sidebar toggle={toggle} setToggle={setToggle} />
      <div className={toggle ? 'main' : 'main-extend'}>{graph}</div>
    </>
  );
};

// const Lighthouse2 = React.memo(Lighthouse, (prevProps, nextProps) => {
//   console.log(prevProps, nextProps);
//   return true;
// });

export default Lighthouse;
