import React from 'react';
//import HighStock from 'src/components/highstock';
import Filters from '../../Filters';
import 'src/main.scss';

//const MetricComponent = props => {
  // const { metric, history } = props;

  class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    componentDidMount() {
        this.highChartsRender();
      
    }


highChartsRender =() => {
       
Highcharts.chart('container', {

    title: {
        text: 'Lighthouse comparison'
    },
    credits: {
      enabled: false
    },

    subtitle: {
        text: ''    
    },

    yAxis: {
        title: {
            text: 'Percentage'
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
            pointStart: 0 
        }
    },

    series: [{
        name: 'Performance',
        data: [50, 52, 57, 69, 97, 11, 13, 15]
    }, {
        name: 'Accessibility',
        data: [24, 64, 97, 85, 49, 82, 38, 40]
    }, {
        name: 'Best Practices',
        data: [74, 77, 60, 71, 85, 77, 47, 87]
    }, {
        name: 'SEO',
        data: [null, null, 79, 69, 51, 45, 34, 34]
    }, {
        name: 'Progressive Web App',
        data: [29, 59, 81, 48, 89, 81, 82, 81]
    }],

    responsive: {
        rules: [{
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
        }]
    }

});
}

render() {

        return (
            <Filters date={'range'} />
             <div id="container">
             </div>
            
        );
    }
}

export default LineChart;




  
