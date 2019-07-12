import React, { useState, useEffect, useRef } from 'react';
import previousState from 'src/utilities/previousState';
import { getTimeRange } from 'src/utilities/timeConversions';
import compare from 'src/utilities/compareObjects';
import AuditData from 'src/utilities/parseAuditData';
import FetchData from 'src/components/graphql/utils';
import { getAudits } from 'src/components/graphql/Queries';
import Collapsible from 'src/components/collapsible';
import searchParams from 'src/utilities/searchParams';
import { metricMap } from 'src/utilities//map';

const Audit = props => {
  const { history } = props;
  const { time } = history.location;
  const { phase, brand, page, date, audits } = searchParams(history.location.search);
  const [query, setQuery] = useState(<></>);
  const [data, setData] = useState({ lighthousedata: [{ audits: {} }] });
  const prevState = previousState({ phase, brand, page, date, audits, time });
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
      setQuery(FetchData(getAudits(metricMap[audits]), setData, variables));
      onMount.current = false;
      return;
    }
    if (!compare(prevState, { phase, brand, page, date, audits, time })) {
      setQuery(FetchData(getAudits(metricMap[audits]), setData, variables));
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
      <div className="customcontainer">
        {DispAudit}
        {query}
      </div>
    </>
  );
};

export default Audit;
