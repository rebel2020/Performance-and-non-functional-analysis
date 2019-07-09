import React, { useState, useEffect } from 'react';
import Filters from '../Filters/index';
import 'src/main.scss';
import { GATLING, LIST } from '../graphql/Queries';
import FetchData from 'src/components/graphql/utils';
import { parseGatlingData } from '../utils/parseGatling';
import { Stats } from './stats';
import { Graph } from './graph';
import searchParams from '../../../utilities/searchParams';

const MetricComponent = props => {
  const { metric, history } = props;
  const [data, setData] = useState();
  const [query, setQuery] = useState(<></>);
  const [vals, setVals] = useState({
    phase: '',
    brand: '',
    finalUrl: 'http://fca-qa1-jeep-sape.test.com',
    fetchTimeEnd: '1562332146476',
    fetchTimeStart: '1562242745597'
  });

  // let search = searchParams(history.location.search);
  // if(JSON.stringify(search) !== '{}' && JSON.stringify(vals) !== JSON.stringify(search)){
  //   console.log(search)
  //   setQuery(FetchData(GATLING,setData,search));
  // }
  useEffect(() => {
    setQuery(FetchData(GATLING, setData, vals));
  }, []);

  const parsedData = parseGatlingData(data);
  let GatlingStats = <></>;
  if (parsedData) {
    console.log(parsedData);
    GatlingStats = parsedData.map((val, i) => <Stats {...val} id={`barchart${i}`} key={i} />);
  }
  return (
    <div className="container">
      <Filters dateRange="range" history={history} />
      <Graph gatlingstats={parsedData} {...props} />
      {/* {GatlingStats} */}
      {query};
    </div>
  );
};

export default MetricComponent;
