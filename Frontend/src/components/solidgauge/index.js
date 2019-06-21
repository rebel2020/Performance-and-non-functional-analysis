import React, { useEffect } from "react";
import Highcharts from "highcharts/highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import Gauge from "highcharts/modules/solid-gauge";
const graphData = {
  chart: {
    type: "solidgauge",
    height: "80%"
  },
  title: {
    text: "Activity",
    style: {
      fontSize: "24px"
    }
  },
  tooltip: {
    borderWidth: 0,
    //ckgroundColor: 'none',
    shadow: false,
    style: {
      fontSize: "16px"
    },
    pointFormat:
      '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
    positioner: function(labelWidth) {
      return {
        x: (this.chart.chartWidth - labelWidth) / 2,
        y: this.chart.plotHeight / 2 + 15
      };
    }
  },
  pane: {
    startAngle: 0,
    endAngle: 360,
    background: [
      {
        // Track for Move
        outerRadius: "112%",
        innerRadius: "88%",
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
      linecap: "round",
      stickyTracking: false,
      rounded: true
    }
  },
  series: [
    {
      name: "Move",
      data: [
        {
          color: Highcharts.getOptions().colors[0],
          radius: "112%",
          innerRadius: "88%",
          y: 80
        }
      ]
    }
  ]
};

const SolidGuage = () => {
  useEffect(() => {
    HighchartsMore(Highcharts);
    Gauge(Highcharts);
    Highcharts.chart("containers", graphData);
  });
  return <div id="containers"></div>;
};

export default SolidGuage;
