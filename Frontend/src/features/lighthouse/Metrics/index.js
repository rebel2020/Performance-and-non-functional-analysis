import React from 'react';
import HighStock from 'src/components/highstock';
import Filters from '../../Filters';
import 'src/main.scss';

const MetricComponent = props => {
  // const { metric, history } = props;
  return (
    <>
      <Filters date={'range'} />
      <HighStock {...props} toUrl="/lighthouse" />
    </>
  );
};

export default MetricComponent;
