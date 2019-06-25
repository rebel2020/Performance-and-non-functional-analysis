import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highcharts';
import stock from 'highcharts/modules/stock';
import data from './data';

const setGraph = name => {
  return {
    chart: {
      style: {
        color: 'white'
      },

      zoomType: 'x'


      // backgroundColor: "#303030"
    },

    rangeSelector: {
      style: {
        color: 'white'
      },
      selected: 1
    },

    title: {
      style: {
        color: 'black'
      },
      text: name
    },

    series: [
      {
        name: 'AAPL Stock Price',
        data: data,
        type: 'area',
        threshold: null,
        tooltip: {
          valueDecimals: 2
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
  const { metric } = props;
  const graphData = setGraph(metric);

  useEffect(() => {
    stock(Highcharts);
    Highcharts.stockChart('container', graphData);
  });

  return <div id="container" />;
};
export default HighStock;
