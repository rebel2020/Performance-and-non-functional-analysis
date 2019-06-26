import React, {useEffect} from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options ={
    chart: {
      type: 'column',
      
    },
    title: {
      text: 'Response Time of Requests'
    },
    xAxis: {
      categories: ['t<800ms', '800ms<t<1200ms', 't>1200ms', 'failed'],
      
    tickmarkPlacement:'on',
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 't<800ms',
      data: [[0,1000]],
      color:'lightgreen',
      pointWidth:60,
    }, {
      name: '800ms<t<1200ms',
      data: [[1,500]],
      color:'yellow',
      pointWidth:60,
      
    }, {
      name: 't>1200ms',
      data: [[2,250]],
      color:'orange',
      pointWidth:60,
    },{
        name: 'failed',
        data: [[3,25]],
        color:'red',
        pointWidth:60,
      }, ]
  };

  const HighChartBar = props => {
    
  
    useEffect(() => {
      
      Highcharts.chart('barchart', options);
    });
  
    return <div id="barchart" />;
  };
  export default HighChartBar;