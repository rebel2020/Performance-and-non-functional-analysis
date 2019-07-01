/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import Gauge from 'highcharts/modules/solid-gauge';
import useGlobal from 'src/store';

import formatString from 'src/utilities/formatString';

const setGraph = (name, value) => {
  return {
    chart: {
      type: 'solidgauge',
      height: '100%',
      width: '150'
    },
    credits: {
      enabled: false
    },
    title: {
      text: formatString(name),
      style: {
        fontSize: '12px'
      }
    },
    tooltip: {
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      style: {
        fontSize: '12px'
      },
      pointFormat:
        '{series.name}<br><span style="font-size:1.5em; color: {point.color}; font-weight: bold">{point.y}%</span>',
      positioner(labelWidth) {
        return {
          x: (this.chart.chartWidth - labelWidth) / 2,
          y: this.chart.plotHeight / 2 + 25
        };
      }
    },
    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [
        {
          // Track for Move
          outerRadius: '112%',
          innerRadius: '88%',
          backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
            .setOpacity(0.3)
            .get(),
          borderWidth: 0
        }
      ]
    },
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: []
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: true
      }
    },
    series: [
      {
        name: '',
        data: [
          {
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: value
          }
        ]
      }
    ]
  };
};
const SolidGuage = props => {
  const [globalState, globalActions] = useGlobal();
  const { env, brand, page, date } = globalState;
  const { name, value, history } = props;
  const graphData = setGraph(name, value);
  useEffect(() => {
    HighchartsMore(Highcharts);
    Gauge(Highcharts);
    Highcharts.chart(name, graphData);
  });
  return (
    <div
      onClick={e => {
        if (page)
          history.push({
            pathname: `/lighthouse`,
            search: `audits=${name}`,
            metric: name
          });
        else alert('select a particular page');
      }}
      id={name}
    />
  );
};

export default SolidGuage;
