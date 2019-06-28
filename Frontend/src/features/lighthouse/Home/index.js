import React, { useState, useEffect, useRef } from 'react';
import SolidGauge from 'src/components/solidgauge';
import FetchData from 'src/components/graphql/utils';
import { AVG_LIGHTHOUSE_SCORES } from 'src/components/graphql/Queries';
import Collapsible from 'src/components/collapsible';
import Filters from '../../Filters';

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
  
  const pa = [
    {
      first_contentful_paint: {
        id: 1,
        weight: 3,
        score: 0.49,
        description:
          'First Contentful Paint marks the time at which the first text or image is painted',
        numericValue: 4034,
        link: 'performance'
      },
      user_timings: {
        weight: 0,
        score: null,
        description:
          "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences",
        numericValue: null,
        link: 'performance'
      }
    }
  ];

  const DispAudit = pa.map((item, i) => {
    console.log(item.id);
    return (
      <Collapsible
        {...props}
        key={item.first_contentful_paint.id}
        k={item.first_contentful_paint.id}
        title={'first_contentful_paint'}
        desc={item.first_contentful_paint.description}
        score={item.first_contentful_paint.score}
        weight={item.first_contentful_paint.weight}
        nv={item.first_contentful_paint.numericValue}
        link={item.first_contentful_paint.link}
      />
    );
  });
  return (
    <div className="container">
      <Filters date="single" options={['hello', 'react']} />
      <div className="flexbox">{flexItems}</div>
      <div>{DispAudit}</div>
      {query}
    </div>
  );
};
export default HomeComponent;
