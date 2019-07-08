import React,{useState,useEffect} from 'react';
import Filters from '../Filters/index';
import 'src/main.scss';
import { GATLING,LIST } from '../graphql/Queries';
import FetchData from 'src/components/graphql/utils';
import {parseGatlingData} from '../utils/parseGatling'
import {Stats} from './stats';
import {Graph} from './graph';
import searchParams from '../../../utilities/searchParams';

const MetricComponent = props => {
  const { metric, history } = props;
  const [data, setData] = useState();
  const [query, setQuery] = useState(<></>);
  const [vals, setVals] = useState({
    phase:'',
    brand:"alfa",
    finalUrl:'',    
    fetchTimeStart:"1562155200000",
    fetchTimeEnd:"1562241600000",
  });

  // let search = searchParams(history.location.search);
  // if(JSON.stringify(search) !== '{}' && JSON.stringify(vals) !== JSON.stringify(search)){
  //   setQuery(FetchData(GATLING,setData,search));
  // }

  useEffect(()=>{
    setQuery(FetchData(GATLING,setData,vals));
  },[]);



  const parsedData = parseGatlingData(data);
  let GatlingStats = <></>;
  if (parsedData) {
    GatlingStats = parsedData.map((val,i) => <Stats {...val} id={`barchart${i}`} key={i}/>)
  }
  return (
    <div className="container">
      <Filters dateRange="range" history={history} />
      {/* <Graph {...props}/> */}
      {GatlingStats}
      {query};
    </div>
  );
};

export default MetricComponent;
