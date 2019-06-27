import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highcharts';
import stock from 'highcharts/modules/stock';
import formatString from 'src/utilities/formatString';
import useGlobal from 'src/store';
import data from './data';

const setGraph = (history, name, toUrl) => {
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
              // history.push({
              //   pathname: toUrl,
              //   search: '?metric=' + name + '&' + 'date=' + e.point.x,
              //   state: { x: e.point.x, metric: name }
              // });
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
  const { metric, history, toUrl } = props;
  const graphData = setGraph(history, metric, toUrl);

  useEffect(() => {
    stock(Highcharts);
    Highcharts.stockChart('container', graphData);
  });

  return <div id="container" />;
};
export default HighStock;
