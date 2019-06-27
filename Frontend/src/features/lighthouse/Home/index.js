import React, { useState, useEffect, useRef } from 'react';
import useGlobal from 'src/store';
import previousState from 'src/utilities/previousState';
import SolidGauge from 'src/components/solidgauge';
import compare from 'src/utilities/compareObjects';
import FetchData from 'src/components/graphql/utils';
import { AVG_LIGHTHOUSE_SCORES } from 'src/components/graphql/Queries';
import Collapsible from 'src/components/collapsible';
import map from 'src/utilities/map';
import Filters from '../../Filters';
import './main.scss';

const HomeComponent = props => {
  const [globalState, globalActions] = useGlobal();
  const { env, brand, page, date } = globalState;
  const [data, setData] = useState({ lighthousedata: [{ audits: {} }] });
  const [query, setQuery] = useState(<></>);
  useEffect(() => {
    setQuery(FetchData(AVG_LIGHTHOUSE_SCORES, setData));
  }, []);
  const prevState = previousState({ env, brand, page, date });
  const onMount = useRef(true);
  useEffect(() => {
    if (onMount.current) {
      onMount.current = false;
      return;
    }
    if (!compare(prevState, { env, brand, page, date })) {
      console.log(JSON.stringify(prevState), JSON.stringify({ env, brand, page, date }));
    }
  });

  console.log(data);
  const obj = data.lighthousedata[0] ? data.lighthousedata[0].audits : {};
  const flexItems = ['best_practices', 'performance', 'p_w_a', 's_e_o'].map((item, i) => {
    return (
      <div key={item}>
        <SolidGauge
          name={item}
          value={Math.round(obj[map[item]] ? obj[map[item]].score * 100 : '')}
        />
      </div>
    );
  });
  return (
    <div className="container">
      <Filters date="single" options={['hello', 'react']} />
      <div className="flexbox">{flexItems}</div>
      <Collapsible {...props} />
      {query}
    </div>
  );
};
export default HomeComponent;
