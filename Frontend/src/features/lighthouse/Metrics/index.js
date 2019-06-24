import React from 'react';
// import Select from 'src/components/selectlist';
import Datalist from 'src/components/datalist';
import HighStock from 'src/components/highstock';
import 'src/main.scss';

const MetricComponent = props => {
  const { metric } = props;
  return (
    <>
      <div className="row flexbox">
        <Datalist listId="urls" options={[]} />
        {/* <Select options={['a', 'b']} /> */}
      </div>
      <HighStock metric={metric} />
    </>
  );
};

export default MetricComponent;
