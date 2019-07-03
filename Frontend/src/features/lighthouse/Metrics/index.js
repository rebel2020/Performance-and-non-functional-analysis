import React, { useState, useEffect } from 'react';
import HighStock from 'src/components/highstock';
import FetchData from 'src/components/graphql/utils';
import Filters from '../../Filters';
import Audits from '../Audits';
import 'src/main.scss';

const MetricComponent = props => {
  const { history } = props;
  const { metric } = history.location;
  let auditContainer = <></>;
  if (metric) auditContainer = <Audits {...props} />;
  return (
    <div className="container">
      <Filters dateRange="range" options={['http://fca-qa1-jeep-sape.test.com/']} />
      <HighStock {...props} toUrl="/lighthouse" />
      {auditContainer}
    </div>
  );
};

export default MetricComponent;