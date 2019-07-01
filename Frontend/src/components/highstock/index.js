import React, { useState, useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highcharts';
import stock from 'highcharts/modules/stock';
import useGlobal from 'src/store';
import previousState from 'src/utilities/previousState';
import compare from 'src/utilities/compareObjects';
import formatString from 'src/utilities/formatString';
import FetchData from 'src/components/graphql/utils';
import map from 'src/utilities/map';
import { getTimeRange, getDate } from 'src/utilities/timeConversions';
import { AVG_LIGHTHOUSE_SCORES, getQuery } from 'src/components/graphql/Queries';
import datal from './datal';

const setGraph = (history, name, toUrl, data) => {
  const [globalState, globalActions] = useGlobal();
  const { page } = globalState;
  return {
    chart: {
      zoomType: 'x',
      spacingLeft: 50,
      spacingRight: 50
      // style: {
      //   color: 'white'
      // }
      // backgroundColor: "#303030"
    },

    rangeSelector: {
      // style: {
      //   color: 'white'
      // },
      selected: 1
    },

    title: {
      style: {
        color: 'black'
      },
      text: formatString(name)
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'AAPL Stock Price',
        data,
        type: 'area',
        threshold: null,
        tooltip: {
          valueDecimals: 2
        },
        point: {
          events: {
            click: e => {
              if (page)
                history.push({
                  pathname: `/lighthouse/${name}`,
                  search: `audit=${history.location.audit || name}`,
                  // state: { x: e.point.x, metric: name }
                  audit: history.location.audit || name
                });
              else alert('select a particular page');
            }
          }
        },
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, 'white'],
            [
              1,
              Highcharts.Color('white')
                .setOpacity(0)
                .get('rgba')
            ]
          ]
        }
      }
    ]
  };
};

const HighStock = props => {
  const [globalState, globalActions] = useGlobal();
  const { env, brand, page, date, toDate } = globalState;
  const { metric, history, toUrl } = props;
  const [data, setData] = useState({ lighthousedata: [] });
  const [query, setQuery] = useState(<></>);
  const audit = history.location.audit || '';
  const prevState = previousState({ env, brand, page, date, toDate, audit });
  const onMount = useRef(true);
  console.log(data, date);
  let arr = [];
  if (history.location.audit) {
    arr = data.lighthousedata.map(obj => {
      return obj.audits[map[metric]]
        ? [parseInt(obj.fetchTime, 10), obj.audits[map[metric]][history.location.audit].score]
        : [];
    });
  } else
    arr = data.lighthousedata.map(obj => [
      parseInt(obj.fetchTime, 10),
      obj.audits[map[metric]].score
    ]);
  const graphData = setGraph(history, metric, toUrl, arr);
  useEffect(() => {
    if (onMount.current) {
      stock(Highcharts);
      if (history.location.audit)
        setQuery(
          FetchData(getQuery(`${map[metric]} { ${history.location.audit} { score }}`), setData)
        );
      else setQuery(FetchData(getQuery(`${map[metric]} { score }`), setData));
      onMount.current = false;
      return;
    }
    Highcharts.stockChart('container', graphData);
    if (!compare(prevState, { env, brand, page, date, toDate, audit })) {
      if (history.location.audit)
        setQuery(
          FetchData(getQuery(`${map[metric]} { ${history.location.audit} { score }}`), setData)
        );
      else setQuery(FetchData(getQuery(`${map[metric]} { score }`), setData));
    }
  });
  return (
    <>
      <div id="container" />
      {query}
    </>
  );
};
export default HighStock;
