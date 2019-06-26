import React, { useState, useEffect } from 'react';
import HighStock from 'src/components/highstock';
import Filters from '../../Filters';
import 'src/main.scss';

const MetricComponent = props => {
  const [url, setUrl] = useState('');
  const [date, setDate] = useState('');
  const [toDate, setToDate] = useState('');
  // console.log(url, date, toDate);
  console.log(props);
  return (
    <>
      <Filters
        date={'range'}
        setUrl={setUrl}
        setDate={setDate}
        setToDate={setToDate}
        options={[]}
      />
      <HighStock {...props} toUrl="/lighthouse" />
    </>
  );
};

export default MetricComponent;
