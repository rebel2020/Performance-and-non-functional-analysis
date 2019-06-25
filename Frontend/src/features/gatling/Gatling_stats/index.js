import React from 'react';
// import Select from 'src/components/selectlist';
import Datalist from 'src/components/datalist';
import HighStock from 'src/components/highstock';
import HighChartBar from '../highchart_bar/index';
import HighChartPie from '../highchart_pie/index';
import Filters from '../../Filters/index';
import 'src/main.scss';
import './styles.scss';

const RadioButtons = props => {
  return (
    <div className="radio_buttons">
      <input type="radio" name="graph_option" value="perc_req" />&nbsp;
      Percentage of Requests Succeeded
      <br />
      <br />
      <input type="radio" name="graph_option" value="num_req" />&nbsp;
      Number of Requets
      <br />
      <br />
      <input type="radio" name="graph_option" value="avg_req_sec" />&nbsp;
      Average Number of Req/Sec
      <br />
      <br />
      <input type="radio" name="graph_option" value="avg_res_time" />&nbsp;
      Average Response Time
      <br /> <br />
    </div>
  );
};

const MetricComponent = props => {
  // const { metric, history } = props;
  return (
    <>
      <div className="row flexbox filters">
        
        <Filters date={'single'} />
       
        {/* <Select options={['a', 'b']} /> */}
      </div>
      <div className="row container">
        <div className="col m10">
          <HighStock {...props} toUrl="/gatling" />
        </div>
        <div className="col m2">
          <RadioButtons />
        </div>
      </div>
      <div className="row">
        <div className="col m6">
          <HighChartBar {...props} />
        </div>
        <div className="col m6">
          <HighChartPie {...props} />
        </div>
      </div>
    </>
  );
};

export default MetricComponent;
