import React, { useState, useEffect, useRef } from 'react';
import useGlobal from 'src/store';
import previousState from 'src/utilities/previousState';
import { getTimeRange } from 'src/utilities/timeConversions';
import compare from 'src/utilities/compareObjects';
import AuditData from 'src/utilities/parseAuditData';
import FetchData from 'src/components/graphql/utils';
import { getAudits } from 'src/components/graphql/Queries';
import Collapsible from 'src/components/collapsible';
import searchParams from 'src/utilities/searchParams';

const Audit = props => {
  const [globalState, globalActions] = useGlobal();
  // const { phase, brand, page, date } = globalState;
  const { history } = props;
  const { metric, time } = history.location;
  const { phase, brand, page, date, toDate } = searchParams(history.location.search);
  const [query, setQuery] = useState(<></>);
  const [data, setData] = useState({ lighthousedata: [{ audits: {} }] });
  const prevState = previousState({ phase, brand, page, date, metric, time });
  const map = {
    performance: 'performance',
    accessibility: 'accessibility',
    best_practices: 'best_practices',
    s_e_o: 'seo',
    p_w_a: 'pwa'
  };
  const timeRange = time
    ? {
        fetchTimeStart: time,
        fetchTimeEnd: (parseInt(time, 10) + 86400000).toString()
      }
    : getTimeRange(date);
  const variables = {
    phase,
    brand,
    finalUrl: page,
    ...timeRange
  };
  const onMount = useRef(true);
  useEffect(() => {
    if (onMount.current) {
      setQuery(FetchData(getAudits(map[metric]), setData, variables));
      onMount.current = false;
      return;
    }
    if (!compare(prevState, { phase, brand, page, date, metric, time })) {
      setQuery(FetchData(getAudits(map[metric]), setData, variables));
    }
  });
  const auditsData = AuditData(data.lighthousedata[0] ? data.lighthousedata[0].audits : {});
  function comp(a, b) {
    if (a.score < b.score) {
      return -1;
    }
    if (a.score > b.score) {
      return 1;
    }
    return 0;
  }
  console.log(data);
  auditsData.sort(comp);
  const DispAudit = auditsData.map(item => {
    // console.log(item.id);
    return (
      <Collapsible
        {...props}
        key={item.id}
        k={item.id}
        title={item.title}
        desc={item.description}
        score={item.score}
        weight={item.weight}
        nv={item.numericValue}
      />
    );
  });
  return (
    <>
      {DispAudit}
      {query}
    </>
  );
};

export default Audit;
