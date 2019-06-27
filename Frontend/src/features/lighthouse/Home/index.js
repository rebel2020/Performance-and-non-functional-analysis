import React, { useState, useEffect, useRef } from 'react';
import SolidGauge from 'src/components/solidgauge';
import FetchData from 'src/components/graphql/utils';
import { AVG_LIGHTHOUSE_SCORES } from 'src/components/graphql/Queries';
import Filters from '../../Filters';
import Collapsible from 'src/components/collapsible'
import './main.scss';

const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const HomeComponent = props => {
  const [data, setData] = useState({ lighthousedata: [{ audits: {} }] });
  const [query, setQuery] = useState(<></>);
  useEffect(() => {
    setQuery(FetchData(AVG_LIGHTHOUSE_SCORES, setData));
  }, []);
  // const query = FetchData(AVG_LIGHTHOUSE_SCORES, setData);
  // const prevState = usePrevious({ url, date });
  // console.log(prevState);
  // console.log(data);
  const { lighthousedata } = data || [{ audits: {} }];
  const obj = lighthousedata.length ? lighthousedata[0].audits : {};
  // const values = Object.keys(obj)
  //   .sort()
  //   .map(key => obj[key].score);
  // const values = { performance: 30, accessibility: 40, best_practices: 50, s_e_o: 60, p_w_a: 70 };
  const values = [0.59, 0.59, 0.59, 0.59, 0.59];
  console.log(props);
  const flexItems = ['accessibility', 'best_practices', 'performance', 'p_w_a', 's_e_o'].map(
    (item, i) => {
      return (
        <div key={item}>
          <SolidGauge name={item} value={Math.round(values[i] * 100)} />
        </div>
      );
    }
  );
  return (
    <div className="container">
      <Filters date="single" options={['hello', 'react']} />
      <div className="flexbox">{flexItems}</div>
      <Collapsible {...props}/>
      {query}
    </div>
  );
};
export default HomeComponent;
