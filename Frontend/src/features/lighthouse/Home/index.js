import React, { useState, useEffect, useRef } from 'react';
import useGlobal from 'src/store';
import previousState from 'src/utilities/previousState';
import { getTimeRange } from 'src/utilities/timeConversions';
import compare from 'src/utilities/compareObjects';
import map from 'src/utilities/map';
// import { AuditData } from 'src/utilities/parseAuditData';
import FetchData from 'src/components/graphql/utils';
import { AVG_LIGHTHOUSE_SCORES, getAudits } from 'src/components/graphql/Queries';
import SolidGauge from 'src/components/solidgauge';
import Collapsible from 'src/components/collapsible';
import AuditData from 'src/utilities/parseAuditData';
import Alert from 'src/components/alerts/index';
import Filters from '../../Filters';
import Audits from '../Audits';
import './main.scss';

const HomeComponent = props => {
  const [globalState, globalActions] = useGlobal();
  const { phase, brand, page, date } = globalState;
  const { history } = props;
  const { metric } = history.location;
  const [data, setData] = useState({ lighthousedata: [{ audits: {} }] });
  const [query, setQuery] = useState(<></>);
  const variables = {
    phase,
    brand,
    finalUrl: page,
    ...getTimeRange(date)
  };
  console.log(variables);
  // console.log(data);
  const prevState = previousState({ phase, brand, page, date });
  const onMount = useRef(true);
  useEffect(() => {
    if (onMount.current) {
      setQuery(FetchData(AVG_LIGHTHOUSE_SCORES, setData, variables));
      onMount.current = false;
      return;
    }
    if (!compare(prevState, { phase, brand, page, date })) {
      setQuery(FetchData(AVG_LIGHTHOUSE_SCORES, setData, variables));
    }
  });

  // AuditData(data.lighthousedata[0].audits);
  const obj = data.lighthousedata[0] ? data.lighthousedata[0].audits : {};
  const flexItems = ['performance', 'accessibility', 'best_practices', 'p_w_a', 's_e_o'].map(
    (item, i) => {
      return (
        <div key={item}>
          <SolidGauge
            name={item}
            value={Math.round(obj[map[item]] ? obj[map[item]].score * 100 : '')}
            // value={70}
            {...props}
          />
        </div>
      );
    }
  );

  let auditContainer = <></>;
  if (metric) auditContainer = <Audits metric={metric} {...props} />;

  const numal = 3;
  let alertContainer = <></>;

  if (numal > 0) {
    alertContainer = <Alert history={history} numalerts={numal} {...props} />;
  }
  return (
    <>
      <div className="container">{alertContainer}</div>
      <div className="container ">
        <Filters dateRange="single" history={history} />

        <div className="flexbox">{flexItems}</div>
        {/* <div>{DispAudit}</div> */}
        {auditContainer}
        {query}
      </div>
    </>
  );
};
export default HomeComponent;
