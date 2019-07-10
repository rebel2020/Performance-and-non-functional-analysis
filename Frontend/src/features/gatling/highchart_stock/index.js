import React, {  useEffect } from 'react';
import Highcharts from 'highcharts/highcharts';
import stock from 'highcharts/modules/stock';
import formatString from 'src/utilities/formatString';

const setGraph = (history, name,  data, setfetchTime) => {
  return {
    chart: {
      zoomType: 'x',
      spacingLeft: 50,
      spacingRight: 50,
      backgroundColor: '#EFEDED'
    },

    rangeSelector: {
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
        name: formatString(name),
        data: data ? [...data] : [],
        type: 'area',
        threshold: null,
        tooltip: {
          valueDecimals: 2
        },
        point: {
          events: {
            click: e => {
              setfetchTime(new Date(e.point.x).getTime())
              // if (page)
              //   history.push({
              //     pathname: `/lighthouse/${name}`,
              //     search: `audits=${metric || name}&${setSearch({
              //       phase,
              //       brand,
              //       page,
              //       date: new Date(e.point.x).getTime(),
              //       toDate: new Date(e.point.x + 86400000).getTime()
              //     })}`,
              //     // state: { x: e.point.x, metric: name }
              //     metric: name,
              //     audit: audit || '',
              //     time: new Date(e.point.x).getTime().toString()
              //   });
              // else
              //   history.push({
              //     pathname: `/lighthouse/${name}`,
              //     search: setSearch({
              //       phase,
              //       brand,
              //       page,
              //       date: new Date(e.point.x).getTime(),
              //       toDate: new Date(e.point.x + 86400000).getTime()
              //     }),
              //     // search: `audits=${metric || name}`,
              //     // state: { x: e.point.x, metric: name }
              //     metric: name,
              //     audit: audit || '',
              //     average: true,
              //     time: new Date(e.point.x).getTime().toString()
              //   });
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
  const { name, history, data, setfetchTime} = props;
  const graphData = setGraph(history, name, data, setfetchTime);
  useEffect(() => {
    stock(Highcharts);
    Highcharts.stockChart('container', graphData);
  }, []);

  useEffect(() => {
    Highcharts.stockChart('container', graphData);
  });
  return (
    <>
      <div id="container" />
    </>
  );
};
export default HighStock;
