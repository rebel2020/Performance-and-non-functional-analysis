import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';

const HighChartBar = props => {
  const { group1, group2, group3, group4 } = props;

  const options = {
    chart: {
      type: 'column',
      backgroundColor: '#383a3e',
      color: 'white'
    },
    title: {
      text: 'Response Time of Requests',
      style: {
        color: 'white'
      }
    },
    legend: {
      itemStyle: {
        color: 'white'
      }
    },

    xAxis: {
      categories: ['t<800ms', '800ms<t<1200ms', 't>1200ms', 'failed'],
      style: {
        color: 'white'
      },
      labels: {
        style: {
          color: 'white'
        }
      },

      tickmarkPlacement: 'on'
    },
    yAxis: {
      title: {
        text: 'Number of Requests',
        style: {
          color: 'white'
        }
      },
      labels: {
        style: {
          color: 'white'
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 't<800ms',
        data: group1,
        color: '#00BC8C',
        pointWidth: 60
      },
      {
        name: '800ms<t<1200ms',
        data: group2,
        color: '#F0CA29',
        pointWidth: 60
      },
      {
        name: 't>1200ms',
        data: group3,
        color: '#F39C12',
        pointWidth: 60
      },
      {
        name: 'Failed',
        data: group4,
        color: '#E74C3C',
        pointWidth: 60
      }
    ]
  };

  useEffect(() => {
    // console.log(props.group1);
    Highcharts.chart(props.id, options);
  });

  return <div id={props.id} />;
};
export default HighChartBar;
