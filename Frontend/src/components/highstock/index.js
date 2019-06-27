import React, { useState, useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highcharts';
import stock from 'highcharts/modules/stock';
import useGlobal from 'src/store';
import previousState from 'src/utilities/previousState';
import compare from 'src/utilities/compareObjects';
import formatString from 'src/utilities/formatString';
import FetchData from 'src/components/graphql/utils';
import map from 'src/utilities/map';
import { AVG_LIGHTHOUSE_SCORES, getQuery } from 'src/components/graphql/Queries';
import datal from './datal';

const setGraph = (history, name, toUrl, data) => {
  const [globalState, globalActions] = useGlobal();
  console.log(history);
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
              console.log(e.point.x);
              history.push({
                pathname: `/lighthouse/${name}`,
                search: `?metric=${name}&date=${e.point.x}`,
                // state: { x: e.point.x, metric: name }
                audit: 'first_contentful_paint'
              });
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
            [0, Highcharts.getOptions().colors[0]],
            [
              1,
              Highcharts.Color(Highcharts.getOptions().colors[0])
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
  const prevState = previousState({ env, brand, page, date, toDate });
  const onMount = useRef(true);
  console.log(data, date);
  useEffect(() => {
    if (onMount.current) {
      onMount.current = false;
      return;
    }
    if (!compare(prevState, { env, brand, page, date, toDate })) {
      if (history.location.audit)
        setQuery(
          FetchData(getQuery(`${map[metric]} { ${history.location.audit} { score }}`), setData)
        );
      else setQuery(FetchData(getQuery(`${map[metric]} { score }`), setData));
    }
  });
  const arr = data.lighthousedata.map(obj => [
    parseInt(obj.fetchTime, 10),
    obj.audits[map[metric]].score
  ]);
  const graphData = setGraph(history, metric, toUrl, arr);
  useEffect(() => {
    stock(Highcharts);
    Highcharts.stockChart('container', graphData);
    if (history.location.audit)
      setQuery(
        FetchData(getQuery(`${map[metric]} { ${history.location.audit} { score }}`), setData)
      );
    else setQuery(FetchData(getQuery(`${map[metric]} { score }`), setData));
  }, []);
  return (
    <>
      <div id="container" />
      {query}
    </>
  );
};
export default HighStock;
