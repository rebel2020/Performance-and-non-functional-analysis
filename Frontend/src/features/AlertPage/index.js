import React, { useState } from 'react';
import useGlobal from 'src/store';

import Sidebar from '../Sidebar/index';
import AlertContent from './AlertContent/index';

// import { Query } from 'react-apollo';
// import { TEST } from '../../components/graphql/Queries';

const AlertPage = props => {
  const { comp, history } = props;
  const [globalState, globalActions] = useGlobal();
  const { toggle } = globalState;
  const numalerts = 5;
  const map = {
    // home: <Home />,
    // performance: <MetricComponent history={history} metric={comp} />,
    // accessibility: <MetricComponent history={history} metric={comp} />
  };

  const graph = map[comp];
  return (
    <>
      <Sidebar history={history} />
      <div className={toggle ? 'main' : 'main-extend'}>
        <AlertContent history={history} numalerts={numalerts} />
      </div>

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

export default AlertPage;
