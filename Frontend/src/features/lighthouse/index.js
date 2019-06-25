import React, { useState,useEffect } from 'react';
import Sidebar from './Sidebar';
import Home from './Home';
import MetricComponent from './Metrics';
import './main.scss';
const Lighthouse = props => {  
  const [toggle, setToggle] = useState(false);

  // const [component, changeComponent] = useState('home');
  const { comp } = props;
  const map = {
    home: <Home />,
    performance: <MetricComponent metric={comp} />,
    accessibility: <MetricComponent metric={comp} />
  };
  const graph = map[comp];
  return (
    <>
      <Sidebar
        toggle={toggle}
        setToggle={setToggle}
        component={comp}
        // changeComponent={changeComponent}
      />
      <div className={toggle ? 'main' : 'main-extend'}>{graph}</div>
    </>
  );
};

export default Lighthouse;
