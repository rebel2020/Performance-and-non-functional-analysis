import React from 'react';
// import Select from 'src/components/selectlist';
import Datalist from 'src/components/datalist';
import HighStock from 'src/components/highstock';
import HighChartBar from '../highchart_bar/index';
import 'src/main.scss';

const MetricComponent = props => {
  // const { metric, history } = props;
  return (
    <>
      <div className="row flexbox filters">
        <Datalist listId="urls" options={[]} />
        {/* <Select options={['a', 'b']} /> */}
      </div>
      <div><HighStock {...props} toUrl="/gatling" /></div>
      <div>
      
      <HighChartBar {...props}/>
      </div>
    </>
  );
};

export default MetricComponent; 
