import React, { useState, useEffect } from 'react';
import HighStock from 'src/components/highstock';
import FetchData from 'src/components/graphql/utils.js';
import Filters from '../../Filters';
import 'src/main.scss';

const MetricComponent = props => {
  const [url, setUrl] = useState('');
  const [date, setDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [data, setData] = useState({});
  // console.log(url, date, toDate);
  useEffect(() => {});
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
