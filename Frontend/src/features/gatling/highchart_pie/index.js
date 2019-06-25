import React, {useEffect} from 'react';

import Highcharts, { reduce } from 'highcharts';


const options =
    {
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
        series: [{
            name: 'Requests',
            colorByPoint: true,
            data: [{
                name: 't<800ms',
                y:84,
                sliced: true,
                selected: true,
                color:'lightgreen',
            }, {
                name: '800ms<t<1200ms',
                y: 6,
                color:'yellow',
                
            }, {
                name: 't>1200ms',
                y: 9,
                color:'orange',
            }, {
                name: 'Failed',
                y: 1,
                color:'red',
            }, ]
        }]
    }
    ;

  const HighChartPie = props => {
    
  
    useEffect(() => {
      
      Highcharts.chart('piechart', options);
    });
  
    return <div id="piechart" />;
  };
  export default HighChartPie;