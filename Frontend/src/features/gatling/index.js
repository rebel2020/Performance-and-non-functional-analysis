import React, { useState } from 'react';
import useGlobal from 'src/store';

import Sidebar from '../Sidebar/index';
import './main.scss';
import MetricComponent from './Gatling_Stats/index';
import { performanceAuditFrag } from '../../components/graphql/fragments';

// import { Query } from 'react-apollo';
// import { TEST } from '../../components/graphql/Queries';

const Gatling = props => {
  const { comp, history } = props;
  const [globalState, globalActions] = useGlobal();
  const { toggle } = globalState;
  const map = {
    // home: <Home />,
    gatling_stats: <MetricComponent history={history} metric={comp} />
    // performance: <MetricComponent history={history} metric={comp} />,
    // accessibility: <MetricComponent history={history} metric={comp} />
  };
  const graph = map[comp];
  return (
    <>
      <Sidebar />
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

export default Gatling;
