import React,{useState,useEffect} from 'react';
import HighStock from 'src/components/highstock';
import HighChartBar from '../highchart_bar/index';
import HighChartPie from '../highchart_pie/index';
import { GATLING } from '../graphql/Queries';
import {parseGatlingData} from '../utils/parseGatling'
import Filters from '../../Filters/index';
import 'src/main.scss';
import FetchData from 'src/components/graphql/utils';
import RadioButtons from '../../../components/radiobuttons/index';

const MetricComponent = props => {
  const [data, setData] = useState();
  const [query, setQuery] = useState(<></>);
  useEffect(()=>{
    setQuery(FetchData(GATLING,setData));
  },[])
  // console.log(parseGatlingData(data))
  return (
    <div className="container tile">
      <Filters dateRange="range" />
      <div className="row container">
        <div className="col m12">
          <HighStock {...props} toUrl="/gatling" />
        </div>
        <div className="col m2">
          <RadioButtons values={[]} />
        </div>
      </div>
      <div className="row">
        <div className="col m5">
          <HighChartBar {...props} />
        </div>
        <div className="col m5">
          <HighChartPie {...props} />
        </div>
      </div>
      {query};
    </div>
  );
};

export default MetricComponent;
