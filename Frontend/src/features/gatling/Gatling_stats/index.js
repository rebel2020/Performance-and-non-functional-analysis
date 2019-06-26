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
    <>
      <div className="row flexbox filters">
        <Filters date={'single'} />

        {/* <Select options={['a', 'b']} /> */}
      </div>
      <div className="row container">
        <div className="col m10">
          <HighStock {...props} toUrl="/gatling" />
        </div>
        <div className="col m2">
          <RadioButtons />
        </div>
      </div>
      <div className="row">
        <div className="col m6">
          <HighChartBar {...props} />
        </div>
        <div className="col m6">
          <HighChartPie {...props} />
        </div>
      </div>
    </>
  );
};

export default MetricComponent;
