import React, { useState } from 'react';
import HighStock from '../highchart_stock/index';
import 'src/main.scss';
import RadioButtons from '../../../components/radiobuttons/index';

const Graph = props => {
  const { gatlingstats } = props;
  let radio_title;
  console.log(gatlingstats);
  const [radioValue, setRV] = useState('');
  radio_title = 'Average Response Time';
  let hscomp = <HighStock data={avgrestime} {...props} toUrl="/gatling" />;
  let avgrestime = [];
  let percreqsucc = [];
  let numreq = [];
  let avgreqps = [];

  if (gatlingstats) {
    const graphdata = gatlingstats.map((i, item) => {
      avgrestime[item] = [i.fetchTime, gatlingstats[item].meanResponseTime.total];
      percreqsucc[item] = [i.fetchTime, gatlingstats[item].numberOfRequests.ok];
      numreq[item] = [i.fetchTime, gatlingstats[item].numberOfRequests.total];
      avgreqps[item] = [i.fetchTime, gatlingstats[item].meanNumberOfRequestsPerSecond.total];
    });
  }

  if (radioValue !== '') {
    if (radioValue == 'avg_response_time') {
      console.log(avgrestime);
      radio_title = 'Average Response Time';
      hscomp = <HighStock data={avgrestime} {...props} toUrl="/gatling" />;
    } else if (radioValue == 'perc_req_success') {
      console.log(percreqsucc);
      radio_title = '% Requests Succeeded';
      hscomp = <HighStock data={percreqsucc} {...props} toUrl="/gatling" />;
    } else if (radioValue == 'num_req') {
      console.log(numreq);
      radio_title = 'Number of Requests';
      hscomp = <HighStock data={numreq} {...props} toUrl="/gatling" />;
    } else if (radioValue == 'avg_req_per_sec') {
      radio_title = 'Average Number of Requests per Second';
      console.log(avgreqps);
      hscomp = <HighStock data={avgreqps} {...props} toUrl="/gatling" />;
    }
  }

  console.log(radioValue);
  return (
    <div className="row container">
      <div className="col m8">{hscomp}</div>
      <div className="col m3">
        <h3>{radio_title}</h3>
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
