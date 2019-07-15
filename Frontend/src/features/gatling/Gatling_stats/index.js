import React, { useState, useEffect } from 'react';
import Filters from '../Filters/index';
import FetchData from 'src/components/graphql/utils';
import searchParams from '../../../utilities/searchParams';
import { GATLING } from '../graphql/Queries';
import { parseGatlingData } from '../utils/parseGatling'
import { Stats } from './stats';
import { Graph } from './graph';
import { Cards } from '../Cards';
import './styles.scss';
import 'src/main.scss';
import './main.scss';

const GatlingComponent = props => {
  const { history } = props;
  const [data, setData] = useState();
  const [query, setQuery] = useState(<></>);
  const [fetchTime,setfetchTime] = useState('');
  const [values, setValues] = useState({
    phase:'',
    brand:'',
    finalUrl:'',    
    fetchTimeStart: Date.now() - 864e5,
    fetchTimeEnd: Date.now(),
  });
  let urls = [];
  let uniqueUrls = [];

  let search = searchParams(history.location.search);
  let flagFilter = 0; 
  if(JSON.stringify(search) !== "{}" && JSON.stringify(values) !== JSON.stringify(search)){
    setValues(search);
    setQuery(FetchData(GATLING,setData,search));
  }
  useEffect(()=>{
    setQuery(FetchData(GATLING,setData,values));
  },[]);

  const {stats,sum} = parseGatlingData(data);
  let displayCards = <></>
  let GatlingStats = <></>;
  let dayStats = <></>
  if (stats) {
    if(!values.finalUrl || values.finalUrl === ""){
      GatlingStats = <Stats history={history} {...sum} {...values}/>
      stats.forEach((obj) => {
        if (urls.indexOf(obj.url) === -1){
             urls.push(obj.url);
             uniqueUrls.push(obj);     
          }
      })
      displayCards = uniqueUrls.map((obj) => <Cards val={obj} history={history} values={values}/>)
      dayStats = <></>
      flagFilter = 0;
    }
    else{
      flagFilter = 1;
      GatlingStats = <Graph setfetchTime={setfetchTime} gatlingstats={stats} {...props} />
      if(fetchTime){
        let renderCard = stats.find((val)=> { return val.fetchTime == fetchTime});
        dayStats = <Stats history={history} {...renderCard} {...values}/>
        displayCards = <></>
      }
    }
  }
  return (
    <div className="container">
      <Filters flagFilter={flagFilter} dateRange="range"  finalUrl={values.finalUrl}  {...props} />
      {GatlingStats}
      {query}
      {dayStats}
      <div className="flexbox">
        {displayCards}
      </div>
    </div>
  );
};

export default GatlingComponent;