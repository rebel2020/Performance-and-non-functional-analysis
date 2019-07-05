import React, { useEffect,useState } from 'react';
import Highcharts from 'highcharts';

const HighChartBar = props => {
  const [group1,setGroup1] = useState([[0, 1000]]);  
  const [group2,setGroup2] = useState([[1, 500]]);  
  const [group3,setGroup3] = useState([[2, 250]]);  
  const [group4,setGroup4] = useState([[3, 125]]);  

  if(props.group1.toString() !== group1.toString()){
    setGroup1(props.group1);
  }
  if(props.group2.toString() !== group2.toString()){
    setGroup2(props.group2);
  }
  if(props.group3.toString() !== group3.toString()){
    setGroup3(props.group3);
  }
  if(props.group4.toString() !== group4.toString()){
    setGroup4(props.group4);
  }

  const options = {
    chart: {
      type: 'column'
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
