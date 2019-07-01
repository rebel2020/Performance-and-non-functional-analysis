import React, { useState, useEffect } from 'react';
import HighStock from 'src/components/highstock';
import FetchData from 'src/components/graphql/utils';
import Filters from '../../Filters';
import Audits from '../Audits';
import 'src/main.scss';

const MetricComponent = props => {
  const { history } = props;
  let auditContainer = <></>;
  if (history.location.audit)
    auditContainer = <Audits metric={history.location.audit} {...props} />;
  return (
    <div className="container tile">
      <Filters date="range" options={['hello']} />
      <HighStock {...props} toUrl="/lighthouse" />
      {auditContainer}
    </div>
  );
};

export default MetricComponent;
