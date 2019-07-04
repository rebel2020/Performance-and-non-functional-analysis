import React,{useState,useEffect} from 'react';
import Filters from '../../Filters/index';
import 'src/main.scss';
import { GATLING,LIST } from '../graphql/Queries';
import FetchData from 'src/components/graphql/utils';
import {parseGatlingData} from '../utils/parseGatling'
import {parseFilterData} from '../utils/fetchUrl';

import {Stats} from './stats';
import {Graph} from './graph';

const MetricComponent = props => {
  const { metric, history } = props;
  const [data, setData] = useState();
  const [list, setList] = useState();
  const [query, setQuery] = useState(<></>);
  const [query1, setQuery1] = useState(<></>);
  const variables = {
    brand:"alfa",
    fetchTimeStart:"1562155200000",
    fetchTimeEnd:"1562241600000"
  }
  useEffect(()=>{
    setQuery(FetchData(GATLING,setData,variables));
    setQuery1(FetchData(LIST,setList));
  },[]);
  const parsedData = parseGatlingData(data);
  parseFilterData(list);
  let GatlingStats = <></>;
  if (parsedData) {
    console.log(parsedData[0]);
    GatlingStats = parsedData.map((val,i) => <Stats {...val} key={i}/>)
  }
  return (
    <div className="container">
      <Filters date="range" />
      {/* <Graph {...props}/> */}
      {GatlingStats}
      {query};
      {query1};
    </div>
  );
};

export default MetricComponent;
