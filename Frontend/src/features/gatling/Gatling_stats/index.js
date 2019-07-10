import React, { useState, useEffect } from 'react';
import Filters from '../Filters/index';
import 'src/main.scss';
import { GATLING } from '../graphql/Queries';
import FetchData from 'src/components/graphql/utils';
import {parseGatlingData} from '../utils/parseGatling'
import {Stats} from './stats1';
import {Graph} from './graph';
import searchParams from '../../../utilities/searchParams';
import { setSearch } from '../utils/search';

const MetricComponent = props => {
  const { metric, history } = props;
  const [data, setData] = useState();
  const [query, setQuery] = useState(<></>);
  const [vals, setVals] = useState({
    phase:'',
    brand:"alfa",
    finalUrl:'',    
    fetchTimeStart: Date.now() - 864e5,
    fetchTimeEnd: Date.now(),
  });

  let search = searchParams(history.location.search);
  if(search.phase == "All"){
    search.phase = "";
  }
  if(search.brand == "All"){
    search.brand = "";
  }
  if(search.finalUrl == "All"){
    search.finalUrl = "";
  }

  if(JSON.stringify(search) !== "{}" && JSON.stringify(vals) !== JSON.stringify(search)){
    console.log("asd")
    setVals(search);
    setQuery(FetchData(GATLING,setData,search));
  }
  useEffect(()=>{
    console.log("okok")
    history.push({search:setSearch(vals)})
    setQuery(FetchData(GATLING,setData,vals));
  },[]);

  const parsedData = parseGatlingData(data);
  let GatlingStats = <></>;
  if (parsedData) {
    console.log(search);
    if(!vals.finalUrl || vals.finalUrl === ""){
      GatlingStats = parsedData.map((val,i) => <Stats {...val} id={`barchart${i}`} key={i}/>)
    }
    else{
      GatlingStats = <Graph gatlingstats={parsedData} {...props} />
    }
  }
  return (
    <div className="container">
      <Filters dateRange="range" history={history} />
      {GatlingStats}
      {query};
    </div>
  );
};

export default MetricComponent;
