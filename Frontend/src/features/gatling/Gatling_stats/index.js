import React from 'react';
// import Select from 'src/components/selectlist';
import Datalist from 'src/components/datalist';
import HighStock from 'src/components/highstock';
import HighChartBar from '../highchart_bar/index';
import HighChartPie from '../highchart_pie/index';
import Filters from '../../Filters/index';
import StatsComponent from '../Stats_Component/index';
import 'src/main.scss';

import RadioButtons from '../../../components/radiobuttons/index';

const MetricComponent = props => {
  const { metric, history } = props;

  let GatlingStats = <></>;
  if (metric) {
    GatlingStats = (
      <div className="row">
        <div className="col m4">
          <HighChartBar {...props} />
        </div>
        {/* <div className="col m3">
          <HighChartPie {...props} />
        </div> */}
        <div className="col m4">
          <StatsComponent {...props} />
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <Filters date="range" />

      {/* <Select options={['a', 'b']} /> */}

      <div className="row container">
        <div className="col m8">
          <HighStock {...props} toUrl="/gatling" />
        </div>
        <div className="col m3">
          <RadioButtons
            values={[
              { value: 'perc_req_success', name: '% Requests Succeeded' },
              { value: 'num_req', name: 'Number of Requests' },
              { value: 'avg_req_per_sec', name: 'Average Number of Requests per Second' },
              { value: 'avg_response_time', name: 'Average Response Time' }
            ]}
          />
        </div>
      </div>
      {GatlingStats}
    </div>
  );
};

export default MetricComponent;
