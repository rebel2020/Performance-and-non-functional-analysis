import React, { useState, useEffect } from 'react';
import Filters from '../Filters/index';
import 'src/main.scss';
import './main.scss';

import { GATLING } from '../graphql/Queries';
import FetchData from 'src/components/graphql/utils';
import {parseGatlingData} from '../utils/parseGatling'
import {Stats} from './stats1';
import {Graph} from './graph';
import searchParams from '../../../utilities/searchParams';
import { setSearch } from '../utils/search';
import './styles.scss';

const MetricComponent = props => {
  const { metric, history } = props;
  const [data, setData] = useState();
  const [query, setQuery] = useState(<></>);
  const [fetchTime,setfetchTime] = useState('');
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
  let displayCards = <></>
  let GatlingStats = <></>;
  let st = <></>
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
      displayCards = Data.map((val,i)=> <div className="col s10 m5 l3 pageCard" key={val.url}
              onClick = {
                ()=>{
                  history.push({
                    search:setSearch({ ...vals, finalUrl: val.url })
                  })
                }
              }> 
           <div className="row"> 
              <div className="col m1"></div>
              {val.url} 
           </div>
           <div className="row"> 
              <div className="col m1"></div>
              <div className="col m8"> Mean Response Time: </div>
              <div className="col m3"> {val.meanResponseTime.total} </div>
           </div>
           <div className="row"> 
              <div className="col m1"></div>
              <div className="col m8"> Number of Requests: </div>
              <div className="col m3"> {val.numberOfRequests.total} </div>
           </div>
           <div className="row"> 
              <div className="col m1"></div>
              <div className="col m8"> Mean No Requests/Second: </div>
              <div className="col m3"> {parseInt(val.meanNumberOfRequestsPerSecond.total)} </div>
           </div>
          <br /> 
       </div> )
      st = <></>
    }
    else{
      GatlingStats = <>
          <div className="row"> 
          <div className="col m1">
          </div>
          <div className="col m3 urltext">
              URL
          </div>
          <div className="col m7 statscard">
            {parsedData[0].url}
          </div>
          <div className="col m1">
          </div>            
          </div>
          <Graph setfetchTime={setfetchTime} gatlingstats={parsedData} {...props} />
        </>
      if(fetchTime){
        let renderCard = parsedData.find((val)=> { return val.fetchTime == fetchTime});
        st = <Stats history={history} {...renderCard} {...vals}/>
        displayCards = <></>
      }
    }
  }
  return (
    <div className="container">
      <Filters dateRange="range" history={history} finalUrl={vals.finalUrl}/>
      {GatlingStats}
      {query}
      {st}
      <div className="flexbox">
        {displayCards}
      </div>
    </div>
  );
};

export default MetricComponent;
