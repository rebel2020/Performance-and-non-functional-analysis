import React, { useState, useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highcharts';
import stock from 'highcharts/modules/stock';
import useGlobal from 'src/store';
import previousState from 'src/utilities/previousState';
import compare from 'src/utilities/compareObjects';
import formatString from 'src/utilities/formatString';
import FetchData from 'src/components/graphql/utils';
import setSearch from 'src/utilities/search';
import map, { averageMap, metricMap } from 'src/utilities/map';
import searchParams from 'src/utilities/searchParams';
import { getTimeRange, getDate, dateOfAverage } from 'src/utilities/timeConversions';
import { getPages, getQuery, AVG_SCORES } from 'src/components/graphql/Queries';
import datal from './datal';

const setGraph = (history, name, data) => {
  const [globalState, globalActions] = useGlobal();
  // const { phase, brand, page, date, toDate } = globalState;
  const { phase, brand, page, date, toDate } = searchParams(history.location.search);
  const { audit, metric } = history;
  return {
    chart: {
      zoomType: 'x',
      spacingLeft: 50,
      spacingRight: 50,
      backgroundColor: '#EFEDED'
      // style: {
      //   color: 'white'
      // }
      // backgroundColor: '#303030'
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
    yAxis: [
      {
        opposite: false,
        lineColor: '#000000',
        min: 0,
        max: 100,
        title: 'Score',
        plotBands: history.location.average
          ? [
              {
                from: 0,
                to: 25,
                color: 'crimson'
              },
              {
                from: 25,
                to: 75,
                color: '#FF9800'
              },
              {
                from: 75,
                to: 100,
                color: 'mediumseagreen'
              }
            ]
          : []
      }
    ],
    xAxis: {
      lineColor: '#000000'
    },
    series: [
      {
        name: formatString(name),
        data,
        color: '#000000',
        lineWidth: 1,
        marker: {
          enabled: true
        },
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
                  search: `audits=${metric || name}&${setSearch({
                    phase,
                    brand,
                    page,
                    date: new Date(e.point.x).getTime(),
                    toDate: new Date(e.point.x + 86400000).getTime()
                  })}`,
                  // state: { x: e.point.x, metric: name }
                  metric: name,
                  audit: audit || '',
                  time: new Date(e.point.x).getTime().toString()
                });
              else
                history.push({
                  pathname: `/lighthouse/${name}`,
                  search: setSearch({
                    phase,
                    brand,
                    page,
                    date: new Date(e.point.x).getTime(),
                    toDate: new Date(e.point.x + 86400000).getTime()
                  }),
                  // search: `audits=${metric || name}`,
                  // state: { x: e.point.x, metric: name }
                  metric: name,
                  audit: audit || '',
                  average: true,
                  time: new Date(e.point.x).getTime().toString()
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
  // const { phase, brand, page, date, toDate } = globalState;
  const { metric, history, id, average } = props;
  const { phase, brand, page, date, toDate } = searchParams(history.location.search);
  const [data, setData] = useState({});
  const [query, setQuery] = useState(<></>);
  const audit = history.location.audit || '';
  const prevState = previousState({ phase, brand, page, date, toDate, audit, average });
  const onMount = useRef(true);
  const variables = {
    phase,
    brand,
    finalUrl: page,
    fetchTimeStart: date.toString(),
    fetchTimeEnd: toDate.toString()
  };
  console.log(data);
  let arr = [];
  if (audit) {
    arr = data.lighthousedata.reverse().map(obj => {
      return obj.audits[map[metric]]
        ? [parseInt(obj.fetchTime, 10), obj.audits[map[metric]][audit].score * 100]
        : [];
    });
  } else if (average) {
    if (data.lighthousedata)
      arr = data.lighthousedata
        .reverse()
        .map(obj => [parseInt(obj.fetchTime, 10), obj.audits[map[metric]].score * 100]);
  } else if (data.average) {
    arr = data.average.map(obj => {
      return [dateOfAverage(obj), obj[averageMap[metric]] * 100];
    });
  }
  const graphData = setGraph(history, metric, arr);
  useEffect(() => {
    if (onMount.current) {
      stock(Highcharts);
      // if (audit)
      //   setQuery(FetchData(getQuery(`${map[metric]} { ${audit} { score }}`), setData, variables));
      if (average === true) setQuery(FetchData(getPages(metricMap[metric]), setData, variables));
      else setQuery(FetchData(AVG_SCORES, setData, variables));
      onMount.current = false;
      return;
    }
    Highcharts.stockChart(id, graphData);
    if (!compare(prevState, { phase, brand, page, date, toDate, audit, average })) {
      // if (audit)
      //   setQuery(
      //     FetchData(getQuery(`${metricMap[metric]} { ${audit} { score }}`), setData, variables)
      //   );
      if (average) setQuery(FetchData(getPages(metricMap[metric]), setData, variables));
      else setQuery(FetchData(AVG_SCORES, setData, variables));
    }
  });
  return (
    <>
      <div id={id} />
      {query}
    </>
  );
};
export default HighStock;
