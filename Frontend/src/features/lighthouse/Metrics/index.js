import React, { useState, useEffect } from 'react';
import HighStock from 'src/components/highstock';
import FetchData from 'src/components/graphql/utils';
import Filters from '../../Filters';
import Audits from '../Audits';
import Pages from '../Pages';
import 'src/main.scss';

const MetricComponent = props => {
  const { history } = props;
  const { metric } = history.location;
  console.log(history.location);
  let auditContainer = <></>;
  let pageContaner = <></>;
  if (metric && !average) auditContainer = <Audits {...props} />;
  if (average) pageContaner = <Pages {...props} />;
  return (
    <div className="container">
      <Filters dateRange="range" history={history} />
      <HighStock {...props} toUrl="/lighthouse" />
      {auditContainer}
      {pageContaner}
    </div>
  );
};

export default MetricComponent;
