import React from 'react';
import useGlobal from 'src/store';
import Sidebar from '../Sidebar/index';
import Home from './Home';
import MetricComponent from './Metrics';
import './main.scss';

const Lighthouse = props => {
  const { comp, history } = props;
  const [globalState] = useGlobal();
  const { toggle } = globalState;
  const map = {
    home: <Home history={history} />,
    performance: <MetricComponent history={history} metric={comp} />,
    accessibility: <MetricComponent history={history} metric={comp} />,
    best_practices: <MetricComponent history={history} metric={comp} />,
    p_w_a: <MetricComponent history={history} metric={comp} />,
    s_e_o: <MetricComponent history={history} metric={comp} />
  };
  const graph = map[comp];
  return (
    <>
      <Sidebar history={history} />
      <div className={toggle ? 'main' : 'main-extend'}>{graph}</div>
    </>
  );
};

export default Lighthouse;
