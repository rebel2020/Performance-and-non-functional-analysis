import React, { useState } from 'react';
import Sidebar from '../Sidebar/index';
import Home from './Home';
import MetricComponent from './Metrics';
// import { Query } from 'react-apollo';
// import { TEST } from '../../components/graphql/Queries';
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
      {/* <Query query={TEST}>
        {({ loading, error, data }) => {
          if (loading) console.log('loading');
          if (error) console.log(error.message);
          if (data) console.log(data);
          return null;
        }}
      </Query> */}
    </>
  );
};

// const Lighthouse2 = React.memo(Lighthouse, (prevProps, nextProps) => {
//   console.log(prevProps, nextProps);
//   return true;
// });

export default Lighthouse;
