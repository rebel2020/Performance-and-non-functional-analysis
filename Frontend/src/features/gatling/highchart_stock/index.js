import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highcharts';
import stock from 'highcharts/modules/stock';
import formatString from 'src/utilities/formatString';

const setGraph = (history, name, data, setfetchTime) => {
  return {
    chart: {
      zoomType: 'x',
      spacingLeft: 50,
      spacingRight: 50,
      backgroundColor: '#383a3e',
      style: {
        color: 'white'
      }
      // backgroundColor: '#303030'
    },

    rangeSelector: {
      style: {
        color: 'white'
      },
      selected: 1,
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
              setfetchTime(new Date(e.point.x).getTime());
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
  const { name, history, data, setfetchTime } = props;
  // let d = data.sort((a,b)=>{
  //   console.log(a,b);
  // })
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
