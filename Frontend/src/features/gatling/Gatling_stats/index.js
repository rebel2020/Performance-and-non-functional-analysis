import React from 'react';
// import Select from 'src/components/selectlist';
import Datalist from 'src/components/datalist';
import HighStock from 'src/components/highstock';
import HighChartBar from '../highchart_bar/index';
import HighChartPie from '../highchart_pie/index';
import Filters from '../../Filters/index';
import 'src/main.scss';

import RadioButtons from '../../../components/radiobuttons/index';

const MetricComponent = props => {
  // const { metric, history } = props;
  return (
    <div className="container tile">
      <Filters dateRange="range" />

      {/* <Select options={['a', 'b']} /> */}

      <div className="row container">
        <div className="col m12">
          <HighStock {...props} toUrl="/gatling" />
        </div>
        <div className="col m2">
          <RadioButtons values={[]} />
        </div>
      </div>
      <div className="row">
        <div className="col m5">
          <HighChartBar {...props} />
        </div>
        <div className="col m5">
          <HighChartPie {...props} />
        </div>
      </div>
    </div>
  );
};

export default MetricComponent;
