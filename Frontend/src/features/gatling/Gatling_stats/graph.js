import React, { useState } from 'react';
import HighStock from '../highchart_stock/index';
import 'src/main.scss';
import RadioButtons from '../../../components/radiobuttons/index';
import './styles.scss';

const Graph = props => {
  const { gatlingstats } = props;
  let radioTitle;
  const [radioValue, setRV] = useState('');

  const [fetchTime, setfetchTime] = useState('');

  radioTitle = 'Average Response Time';

  const avgrestime = [];
  const percreqsucc = [];
  const numreq = [];
  const avgreqps = [];
  let hscomp = (
    <HighStock name={radioTitle} data={avgrestime} setfetchTime={setfetchTime} {...props} />
  );

  if (gatlingstats) {
    const graphdata = gatlingstats.map((i, item) => {
      avgrestime[item] = [parseInt(i.fetchTime), i.meanResponseTime.total];
      percreqsucc[item] = [parseInt(i.fetchTime), i.numberOfRequests.ok];
      numreq[item] = [parseInt(i.fetchTime), i.numberOfRequests.total];
      avgreqps[item] = [parseInt(i.fetchTime), i.meanNumberOfRequestsPerSecond.total];
    });
  }

  if (radioValue !== '') {
    if (radioValue == 'avg_response_time') {
      radioTitle = 'Average Response Time';
      hscomp = (
        <HighStock name={radioTitle} data={avgrestime} setfetchTime={setfetchTime} {...props} />
      );
    } else if (radioValue == 'perc_req_success') {
      radioTitle = '% Requests Succeeded';
      hscomp = (
        <HighStock name={radioTitle} data={percreqsucc} setfetchTime={setfetchTime} {...props} />
      );
    } else if (radioValue == 'num_req') {
      radioTitle = 'Number of Requests';
      hscomp = <HighStock name={radioTitle} data={numreq} setfetchTime={setfetchTime} {...props} />;
    } else if (radioValue == 'avg_req_per_sec') {
      radioTitle = 'Average Number of Requests per Second';
      hscomp = (
        <HighStock name={radioTitle} data={avgreqps} setfetchTime={setfetchTime} {...props} />
      );
    }
  }

  console.log(fetchTime);
  return (
    <div className="row container radiocomp">
      <div className="col m8">{hscomp}</div>
      <div className="col m4">
        <h3>{radioTitle}</h3>
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
