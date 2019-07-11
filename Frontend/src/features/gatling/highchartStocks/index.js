import React, { useState, useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highcharts';
import stock from 'highcharts/modules/stock';

const HighStock = props => {
  const options = {
    chart: {
      backgroundColor: '#383a3e'
    },
    title: {
      text: props.title,
      style: {
        color: 'white'
      }
    },

    subtitle: {
      text: 'Server Stats',
      style: { color: 'white' }
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Start', 'RampUp', 'Peek'],
      labels: {
        style: {
          color: 'white'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Utilization',
        style: {
          color: 'white'
        }
      },
      labels: {
        style: {
          color: 'white'
        }
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: '#808080'
        }
      ]
    },
    // tooltip: {
    //     valueSuffix: '\xB0C'
    // },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0,
      itemStyle: {
        color: 'white'
      }
    },
    series: [
      {
        name: 'CPU',
        data: props.cpu,
        color: '#00BC8C'
      },
      {
        name: 'RAM',
        data: props.ram,
        color: '#3498DB'
      },
      // {
      //   name: 'JVM',
      //   data: props.jvm,
      //   color: '#F39C12'
      // }
    ]
  };

  useEffect(() => {
    stock(Highcharts);
    Highcharts.chart(props.id, options);
  });
  return (
    <>
      <div id={props.id} />
    </>
  );
};
export default HighStock;
