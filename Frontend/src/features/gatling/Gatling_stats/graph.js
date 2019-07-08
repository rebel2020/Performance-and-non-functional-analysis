import React from 'react';
import HighStock from 'src/components/highstock';
import 'src/main.scss';
import RadioButtons from '../../../components/radiobuttons/index';

const Graph = props => {
  return (
      <div className="row container">
        <div className="col m8">
          <HighStock {...props} toUrl="/gatling" />
        </div>
        <div className="col m3">
          <RadioButtons
            values={[
              { value: 'avg_response_time', name: 'Average Response Time' },
              { value: 'perc_req_success', name: '% Requests Succeeded' },
              { value: 'num_req', name: 'Number of Requests' },
              { value: 'avg_req_per_sec', name: 'Average Number of Requests per Second' },
            ]}
          />
        </div>
      </div>
  );
};

export {Graph};
