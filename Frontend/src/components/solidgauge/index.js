/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import Gauge from 'highcharts/modules/solid-gauge';
import setSearch from 'src/utilities/search';
import formatString from 'src/utilities/formatString';
import searchParams from 'src/utilities/searchParams';
import getDefaultDateRange from 'src/utilities/getDefaultDateRange';

const setGraph = (name, value) => {
  return {
    chart: {
      type: 'solidgauge',
      height: '100%',
      width: '150',
      backgroundColor: '#222222',
      color: '#f5f6f9'
    },
    credits: {
      enabled: false
    },
    title: {
      text: formatString(name),
      style: {
        fontSize: '12px',
        color: '#f5f6f9'
      }
    },
    tooltip: {
      enabled: false
    },
    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [
        {
          outerRadius: '112%',
          innerRadius: '88%',
          backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
            .setOpacity(0.1)
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
          borderWidth: 0,
          format: '{y}%',
          style: {
            fontSize: '16px',
            color: 'white'
          },
          verticalAlign: 'middle'
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
            color: value < 25 ? '#E74C3C' : value < 75 ? ' #F39C12' : '#00BC8C',
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
  const { name, value, history } = props;
  const { phase, brand, page, date, toDate } = searchParams(history.location.search);
  const graphData = setGraph(name, value);
  useEffect(() => {
    HighchartsMore(Highcharts);
    Gauge(Highcharts);
    Highcharts.chart(name, graphData);
  });
  return (
    <div
      onClick={e => {
        // if (page)
        //   history.push({
        //     pathname: `/lighthouse`,
        //     search: `audits=${name}&${setSearch({ phase, brand, page, date, toDate: date })}`,
        //     metric: name
        //     // time: new Date(date).getTime().toString()
        //   });
        // else
        history.push({
          pathname: `/lighthouse/${name}`,
          search: setSearch({ phase, brand, page, ...getDefaultDateRange() })
        });
      }}
      id={name}
    />
  );
};

export default SolidGuage;
