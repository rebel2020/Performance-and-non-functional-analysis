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
  let urls = [];
  let Data = [];
  let summedData = {
    dispatcher_stats:"",
    publisher_stats:"",
    group1:{
      count:0
    },
    group2:{
      count:0
    },
    group3:{
      count:0
    },
    group4:{
      count:0
    },
    numberOfRequests:{
       ok:0,
       ko:0,
       total:0 
    }
  }

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
    setVals(search);
    setQuery(FetchData(GATLING,setData,search));
  }
  useEffect(()=>{
    setQuery(FetchData(GATLING,setData,vals));
  },[]);

  const parsedData = parseGatlingData(data);
  let GatlingStats = <></>;
  if (parsedData) {
    if(!vals.finalUrl || vals.finalUrl === ""){
      parsedData.map((val) => {
        summedData.group1.count += val.group1.count;
        summedData.group2.count += val.group2.count;
        summedData.group3.count += val.group3.count;
        summedData.group4.count += val.group4.count;
        summedData.numberOfRequests.ok += val.numberOfRequests.ok;
        summedData.numberOfRequests.ko += val.numberOfRequests.ko;
        summedData.numberOfRequests.total += val.numberOfRequests.total;
      })
      summedData.dispatcher_stats = parsedData[0].dispatcher_stats;
      summedData.publisher_stats = parsedData[0].publisher_stats;
      GatlingStats = <Stats history={history} {...summedData} {...vals}/>

      parsedData.forEach((val) => {
        if (urls.indexOf(val.url) === -1){
             urls.push(val.url);
             Data.push(val);
          }
      })
      console.log(Data);
    }
    else{
      GatlingStats = <Graph gatlingstats={parsedData} {...props} />
    }
  }
  return (
    <div className="container">
      <Filters dateRange="range" history={history} />
      {GatlingStats};
      {query};
    </div>
  );
};

export default MetricComponent;
