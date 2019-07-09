import React, { useState, useEffect } from 'react';
import HighStock from 'src/components/highstock';
import FetchData from 'src/components/graphql/utils';
import searchParams from 'src/utilities/searchParams';
import Filters from '../../Filters';
import Audits from '../Audits';
import Pages from '../Pages';
import 'src/main.scss';

const MetricComponent = props => {
  const { history } = props;
  const { metric, average } = history.location;
  const { audits, pages } = searchParams(history.location.search);
  // console.log(history.location);
  let auditContainer = <></>;
  let pageContaner = <></>;
  if (audits) auditContainer = <Audits {...props} />;
  if (pages) pageContaner = <Pages {...props} />;
  return (
    <div className="container">
      <Filters dateRange="range" history={history} />
      <HighStock {...props} pages={pages} id="metric" />
      {auditContainer}
      {pageContaner}
    </div>
  );
};

export default MetricComponent;
