import React, { useState } from 'react';
import HighStock from 'src/components/highstock';
import 'src/main.scss';
import RadioButtons from '../../../components/radiobuttons/index';

const Graph = props => {
  const { gatlingstats } = props;
  console.log(gatlingstats);
  const [radioValue, setRV] = useState('');
  let hscomp = <HighStock data={avgrestime} {...props} toUrl="/gatling" />;
  let avgrestime = [];
  let percreqsucc = [];
  let numreq = [];
  let avgreqps = [];
  if (gatlingstats) {
    const graphdata = gatlingstats.map((i, item) => {
      avgrestime[item] = gatlingstats[item].meanResponseTime.total;
      percreqsucc[item] = gatlingstats[item].numberOfRequests.ok;
      numreq = gatlingstats[item].numberOfRequests.total;
      avgreqps = gatlingstats[item].meanNumberOfRequestsPerSecond.total;
    });
    console.log(avgrestime);
  }

  if (radioValue !== '') {
    if (radioValue == 'avg_response_time') {
      hscomp = <HighStock data={avgrestime} {...props} toUrl="/gatling" />;
    } else if (radioValue == 'perc_req_success') {
      hscomp = <HighStock data={percreqsucc} {...props} toUrl="/gatling" />;
    } else if (radioValue == 'num_req') {
      hscomp = <HighStock data={numreq} {...props} toUrl="/gatling" />;
    } else if (radioValue == 'avg_req_per_sec') {
      hscomp = <HighStock data={avgreqps} {...props} toUrl="/gatling" />;
    }
  }

  console.log(radioValue);
  return (
    <div className="row container">
      <div className="col m8">{hscomp}</div>
      <div className="col m3">
        <RadioButtons
          values={[
            { value: 'avg_response_time', name: 'Average Response Time' },
            { value: 'perc_req_success', name: '% Requests Succeeded' },
            { value: 'num_req', name: 'Number of Requests' },
            { value: 'avg_req_per_sec', name: 'Average Number of Requests per Second' }
          ]}
          setRV={setRV}
        />
      </div>
    </div>
  );
};

export { Graph };
