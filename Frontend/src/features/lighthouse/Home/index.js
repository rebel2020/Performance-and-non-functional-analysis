import React, { useState, useEffect, useRef } from 'react';
import useGlobal from 'src/store';
import previousState from 'src/utilities/previousState';
import SolidGauge from 'src/components/solidgauge';
import compare from 'src/utilities/compareObjects';
import FetchData from 'src/components/graphql/utils';
import { AVG_LIGHTHOUSE_SCORES, getAudits } from 'src/components/graphql/Queries';
import Collapsible from 'src/components/collapsible';
import map from 'src/utilities/map';
import Filters from '../../Filters';
import Audits from '../Audits';
import './main.scss';
import { AuditData } from '../../../utilities/parseAuditData';
// import Alert from '../../../components/alerts/index';

const HomeComponent = props => {
  const [globalState, globalActions] = useGlobal();
  const { env, brand, page, date } = globalState;
  const { history } = props;
  const [data, setData] = useState({ lighthousedata: [{ audits: {} }] });
  const [query, setQuery] = useState(<></>);
  const variables = {
    finalUrl: 'http://fca-qa1-jeep-sape.test.com/',
    fetchTimeStart: '1561623842607',
    fetchTimeEnd: '1561623842607'
  };
  useEffect(() => {
    // setQuery(FetchData(getAudits("seo"), setData,variables));
    setQuery(FetchData(AVG_LIGHTHOUSE_SCORES, setData));
  }, []);
  const prevState = previousState({ env, brand, page, date });
  const onMount = useRef(true);
  useEffect(() => {
    if (onMount.current) {
      onMount.current = false;
      return;
    }
    if (!compare(prevState, { env, brand, page, date })) {
      console.log(JSON.stringify(prevState), JSON.stringify({ env, brand, page, date }));
    }
  });

  // console.log(data.lighthousedata[0].audits);
  // AuditData(data.lighthousedata[0].audits);
  const obj = data.lighthousedata[0] ? data.lighthousedata[0].audits : {};
  const flexItems = ['best_practices', 'performance', 'p_w_a', 's_e_o'].map((item, i) => {
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
  });

  let auditContainer = <></>;
  const numal = 3;
  let alertContainer = <></>;

  if (numal > 0) {
    alertContainer = <Alert history={history} numalerts={numal} {...props} />;
  }
  if (history.location.audit)
    auditContainer = <Audits metric={history.location.audit} {...props} />;
  return (
    <>
      <div className="container tile">{alertContainer}</div>
      <div className="container tile">
        <Filters date="single" options={['hello', 'react']} />

        <div className="flexbox">{flexItems}</div>
        {/* <div>{DispAudit}</div> */}
        {auditContainer}
        {query}
      </div>
    </>
  );
};
export default HomeComponent;
