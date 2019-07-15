import React, { useState, useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highcharts';
import stock from 'highcharts/modules/stock';
import previousState from 'src/utilities/previousState';
import compare from 'src/utilities/compareObjects';
import formatString from 'src/utilities/formatString';
import FetchData from 'src/components/graphql/utils';
import setSearch from 'src/utilities/search';
import map, { averageMap, metricMap, pagesMap } from 'src/utilities/map';
import searchParams from 'src/utilities/searchParams';
import { dateOfAverage } from 'src/utilities/timeConversions';
import { getPages, AVG_SCORES } from 'src/components/graphql/Queries';

const setGraph = (history, name, data) => {
  const { phase, brand, page, audits, pages } = searchParams(history.location.search);
  const { audit, metric } = history;
  const title = page
    ? `${formatString(name)} - ${formatString(pagesMap[page])}`
    : formatString(name);
  return {
    chart: {
      zoomType: 'x',
      spacingLeft: 50,
      spacingRight: 50,
      backgroundColor: '#222222',
      style: {
        color: 'white'
      }
      // backgroundColor: '#303030'
    },
    rangeSelector: {
      selected: 4,
      inputEnabled: false,
      buttonTheme: {
        visibility: 'hidden'
      },
      labelStyle: {
        visibility: 'hidden'
      }
    },
    title: {
      style: {
        color: 'white'
      },
      text: title
    },
    credits: {
      enabled: false
    },
    yAxis: [
      {
        opposite: false,
        lineColor: '#FFFFFF',
        min: 0,
        max: 100,
        title: {
          text: 'Score',
          style: {
            color: 'white'
          }
        },
        labels: {
          style: {
            color: 'white'
          }
        },
        plotBands: pages
          ? [
              {
                from: 0,
                to: 25,
                color: '#E74C3C'
              },
              {
                from: 25,
                to: 75,
                color: '#F39C12'
              },
              {
                from: 75,
                to: 100,
                color: '#00BC8C'
              }
            ]
          : []
      }
    ],
    xAxis: {
      lineColor: '#FFFFFF',
      // units: ['day', [1]],
      categories: data.map(value => value[0]),
      title: {
        text: 'Date',
        style: {
          color: 'white'
        }
      },
      labels: {
        style: {
          color: 'white'
        }
      },

      dateTimeLabelFormats: {
        day: '%Y-%m-%d'
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          style: {
            color: 'white'
          }
        }
      }
    },
    series: [
      {
        name: formatString(name),
        data,
        color: '#FFFFFF',
        lineWidth: 1,
        marker: {
          enabled: true
        },
        type: 'area',
        threshold: null,
        tooltip: {
          valueDecimals: 2
        },
        cursor: 'pointer',
        point: {
          events: {
            click: e => {
              if (audits) console.log('');
              else if (page)
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
              else if (pages) console.log('');
              else
                history.push({
                  pathname: `/lighthouse/${name}`,
                  search: `pages=${name}&${setSearch({
                    phase,
                    brand,
                    page,
                    date: new Date(e.point.x).getTime(),
                    toDate: new Date(e.point.x + 86400000).getTime()
                  })}`,
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
const getDays = a => {
  return a.year * 365 + a.month * 30 + a.day;
};
const HighStock = props => {
  const { metric, history, id, average } = props;
  const { phase, brand, page, date, toDate, pages } = searchParams(history.location.search);
  const [data, setData] = useState({});
  const [query, setQuery] = useState(<></>);
  const audit = history.location.audit || '';
  const prevState = previousState({ phase, brand, page, date, toDate, audit, pages });
  const onMount = useRef(true);
  // console.log(searchParams(history.location.search));
  const variables = {
    phase,
    brand,
    finalUrl: page,
    fetchTimeStart: date.toString(),
    fetchTimeEnd: toDate.toString()
  };
  // console.log(data);
  let arr = [];
  if (audit) {
    arr = data.lighthousedata.reverse().map(obj => {
      return obj.audits[map[metric]]
        ? [
            parseInt(obj.fetchTime, 10),
            Math.round(obj.audits[map[metric]][audit].score * 10000) / 100
          ]
        : [];
    });
  } else if (pages) {
    if (data.lighthousedata)
      arr = data.lighthousedata
        .reverse()
        .map(obj => [
          parseInt(obj.fetchTime, 10),
          Math.round(obj.audits[map[metric]].score * 10000) / 100
        ]);
  } else if (data.average) {
    data.average.sort((a, b) => {
      if (getDays(a.fetchDate) < getDays(b.fetchDate)) return -1;
      if (getDays(a.fetchDate) > getDays(b.fetchDate)) return 1;
      return 0;
    });
    arr = data.average.map(obj => {
      return [dateOfAverage(obj), Math.round(obj[averageMap[metric]] * 10000) / 100];
    });
  }
  console.log(data);
  const graphData = setGraph(history, metric, arr);
  useEffect(() => {
    if (onMount.current) {
      stock(Highcharts);
      // if (audit)
      //   setQuery(FetchData(getQuery(`${map[metric]} { ${audit} { score }}`), setData, variables));
      if (pages) setQuery(FetchData(getPages(metricMap[metric]), setData, variables));
      else setQuery(FetchData(AVG_SCORES, setData, variables));
      onMount.current = false;
      return;
    }
    Highcharts.stockChart(id, graphData);
    if (!compare(prevState, { phase, brand, page, date, toDate, audit, pages })) {
      // if (audit)
      //   setQuery(
      //     FetchData(getQuery(`${metricMap[metric]} { ${audit} { score }}`), setData, variables)
      //   );
      if (pages) setQuery(FetchData(getPages(metricMap[metric]), setData, variables));
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
