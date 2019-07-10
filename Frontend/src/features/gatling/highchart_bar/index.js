import React, { useEffect,useState } from 'react';
import Highcharts from 'highcharts';

const HighChartBar = props => {
  const {group1,group2,group3,group4} = props;

  const options = {
    chart: {
      type: 'column',
      backgroundColor: '#EFEDED',
    },
    title: {
      text: 'Response Time of Requests'
    },
    xAxis: {
      categories: ['t<800ms', '800ms<t<1200ms', 't>1200ms', 'failed'],
  
      tickmarkPlacement: 'on'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 't<800ms',
        data: group1,
        color: 'lightgreen',
        pointWidth: 60
      },
      {
        name: '800ms<t<1200ms',
        data: group2,
        color: 'yellow',
        pointWidth: 60
      },
      {
        name: 't>1200ms',
        data: group3,
        color: 'orange',
        pointWidth: 60
      },
      {
        name: 'failed',
        data: group4,
        color: 'red',
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
