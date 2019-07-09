import React, { useState, useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highcharts';
import stock from 'highcharts/modules/stock';

const HighStock = props => {
  
  const options = {
    title: {
        text: props.title   
    },
    subtitle : {
        text: 'Server Stats'
    },
    xAxis : {
        categories: ['Start','RampUp','Peek']
    },
    yAxis : {
        title: {
            text: 'Utilization'
        },
        plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
        }]
    },
    // tooltip: {
    //     valueSuffix: '\xB0C'
    // },
    legend : {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series :  [{
        name: 'CPU',
        data: props.cpu
    },
    {
        name: 'RAM',
        data: props.ram
    }, 
    {
        name: 'JVM',
        data: props.jvm
    }]
  }  

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
