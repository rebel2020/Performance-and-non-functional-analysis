import React, { useEffect } from 'react';

import Highcharts, { reduce } from 'highcharts';

const HighChartPie = props => {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Number of Requests'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [
      {
        name: 'Requests',
        colorByPoint: true,
        data: [
          {
            name: 't<800ms',
            y: 65,
            sliced: true,
            selected: true,
            color: 'lightgreen'
          },
          {
            name: '800ms<t<1200ms',
            y: 17,
            color: 'yellow'
          },
          {
            name: 't>1200ms',
            y: 10,
            color: 'orange'
          },
          {
            name: 'Failed',
            y: 8,
            color: 'red'
          }
        ]
      }
    ]
  };

  useEffect(() => {
    Highcharts.chart(props.id, options);
  });
  return <div id={props.id} />;
};
export default HighChartPie;
