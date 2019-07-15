/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useRef } from 'react';
import previousState from 'src/utilities/previousState';
import { getTimeRange } from 'src/utilities/timeConversions';
import setSearch from 'src/utilities/search';
import compare from 'src/utilities/compareObjects';
import pagesData from 'src/utilities/parsePagesData';
import FetchData from 'src/components/graphql/utils';
import { getPages } from 'src/components/graphql/Queries';
import searchParams from 'src/utilities/searchParams';
import { metricMap, pagesMap } from 'src/utilities/map';
import formatString from 'src/utilities/formatString';
import 'src/main.scss';
import './main.scss';

const Pages = props => {
  const { history } = props;
  const { phase, brand, page, date, toDate, pages } = searchParams(history.location.search);
  const { time } = history.location;
  const [query, setQuery] = useState(<></>);
  const [data, setData] = useState({ lighthousedata: [] });
  const prevState = previousState({ phase, brand, page, date, pages, time });
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
  // console.log(variables);
  const onMount = useRef(true);
  useEffect(() => {
    if (onMount.current) {
      setQuery(FetchData(getPages(metricMap[pages]), setData, variables));
      onMount.current = false;
      return;
    }
    if (!compare(prevState, { phase, brand, page, date, pages, time })) {
      setQuery(FetchData(getPages(metricMap[pages]), setData, variables));
    }
  });
  const pagesArr = pagesData(data.lighthousedata, metricMap[pages]);
  let bgcol;
  const DispPages = pagesArr.map(item => {
    return (
      <div
        key={item.finalUrl}
        className="col s10 m5 l3 pageCard"
        onClick={() => {
          history.push({
            pathname: history.pathname,
            search: setSearch({
              phase,
              brand,
              page: item.finalUrl,
              date: date - 604800000,
              toDate: (parseInt(date, 10) + 604800000).toString()
            })
          });
        }}
      >
        {formatString(pagesMap[item.finalUrl])}
        <br />
        <br />
        {item.scores.map(i => {
          const roundscore = Math.round(i.score * 100);
          if (roundscore <= 25) {
            bgcol = 'bg--iored';
          } else if (roundscore > 25 && roundscore <= 75) {
            bgcol = 'bg--ioyellow';
          } else {
            bgcol = 'bg--iogreen';
          }
          return (
            <pre>
              {`${i.time}:  `}
              <div className={`score ${bgcol}`}>{Math.round(i.score * 100)}</div>
            </pre>
          );
        })}
        <br />
      </div>
    );
  });
  return (
    <div className="flexbox">
      {DispPages}
      {query}
    </div>
  );
};

export default Pages;
