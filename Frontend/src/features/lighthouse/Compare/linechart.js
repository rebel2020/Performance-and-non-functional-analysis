import React from 'react';
import Highcharts from 'highcharts';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.highChartsRender();
  }

  highChartsRender = () => {
    Highcharts.chart('container', {
      title: {
        text: 'Performance Comparison'
      },

      subtitle: {
        text: ''
      },

      yAxis: {
        title: {
          text: 'Performance Score'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },

      series: [
        {
          name: 'url1',
          data: [43, 52, 57, 69, 97, 91, 71, 75]
        },
        {
          name: 'url2',
          data: [49, 64, 74, 85, 49, 82, 81, 40]
        },
        {
          name: 'url3',
          data: [74, 57, 60, 77, 85, 77, 47, 87]
        },
        {
          name: 'url4',
          data: [90, 59, 81, 48, 89, 81, 74, 81]
        }
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }
        ]
      }
    });
  };

  render() {
    return <div id="container" />;
  }
}

export default LineChart;
