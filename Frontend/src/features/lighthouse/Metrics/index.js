import React from 'react';
import HighStock from 'src/components/highstock';
import searchParams from 'src/utilities/searchParams';
import Filters from '../../Filters';
import Audits from '../Audits';
import Pages from '../Pages';
import 'src/main.scss';

const MetricComponent = props => {
  const { history } = props;
  const { audits, pages } = searchParams(history.location.search);
  let auditContainer = <></>;
  let pageContaner = <></>;
  if (audits) auditContainer = <Audits {...props} />;
  if (pages) pageContaner = <Pages {...props} />;
  return (
    <div className="container">
      <Filters dateRange="range" history={history} />
      <div className="customcontainer">
        <div className="customcard">
          <HighStock {...props} pages={pages} id="metric" />
        </div>
      </div>
      {auditContainer}
      {pageContaner}
    </div>
  );
};

export default MetricComponent;
