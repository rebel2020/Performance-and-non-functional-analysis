import React, { useState, useEffect } from 'react';
import HighStock from 'src/components/highstock';
import FetchData from 'src/components/graphql/utils';
import Filters from '../../Filters';
import 'src/main.scss';

const MetricComponent = props => {
  console.log(props);
  return (
    <>
      <Filters date="range" options={[]} />
      <HighStock {...props} toUrl="/lighthouse" />
    </>
  );
};

export default MetricComponent;
