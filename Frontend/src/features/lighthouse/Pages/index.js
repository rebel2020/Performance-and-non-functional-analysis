import React, { useState, useEffect, useRef } from 'react';
import useGlobal from 'src/store';
import previousState from 'src/utilities/previousState';
import { getTimeRange } from 'src/utilities/timeConversions';
import compare from 'src/utilities/compareObjects';
import pagesData from 'src/utilities/parsePagesData';
import FetchData from 'src/components/graphql/utils';
import { getPages } from 'src/components/graphql/Queries';
import './main.scss';

const Pages = props => {
  const [globalState, globalActions] = useGlobal();
  const { setPage } = globalActions;
  const { phase, brand, page, date } = globalState;
  const { history } = props;
  const { metric, time } = history.location;
  const [query, setQuery] = useState(<></>);
  const [data, setData] = useState({ lighthousedata: [] });
  const prevState = previousState({ phase, brand, page, date, metric, time });
  const map = {
    performance: 'performance',
    accessibilty: 'accessibilty',
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
  console.log(variables);
  const onMount = useRef(true);
  useEffect(() => {
    if (onMount.current) {
      setQuery(FetchData(getPages(map[metric]), setData, variables));
      console.log(getPages(map[metric]));
      onMount.current = false;
      return;
    }
    if (!compare(prevState, { phase, brand, page, date, metric, time })) {
      setQuery(FetchData(getPages(map[metric]), setData, variables));
    }
  });
  const pages = pagesData(data.lighthousedata, map[metric]);
  // console.log(data);
  const DispPages = pages.map(item => {
    return (
      <div className="card" key={item.fetchTime} onClick={e => setPage(item.finalUrl)}>
        {item.score * 100}
      </div>
    );
  });
  return (
    <>
      {DispPages}
      {query}
    </>
  );
};

export default Pages;
