import React, { useState, useEffect } from 'react';
import SolidGauge from 'src/components/solidgauge';
import Filters from '../../Filters';
import Collapsible from 'src/components/collapsible'
import './main.scss';

const HomeComponent = (props) => {
  const [url, setUrl] = useState('');
  const [date, setDate] = useState('');
  console.log(url, date);
  const values = { performance: 30, accessibility: 40, best_practices: 50, s_e_o: 60, p_w_a: 70 };
  const flexItems = ['performance', 'accessibility', 'best_practices', 's_e_o', 'p_w_a'].map(
    item => {
      return (
        <div key={item}>
          <SolidGauge name={item} value={values[item]} />
        </div>
      );
    }
  );
  return (
    <div className="container">
      <Filters date={'single'} options={['hello', 'react']} setDate={setDate} setUrl={setUrl} />
      <div className="flexbox">{flexItems}</div>
      <Collapsible {...props}/>
    </div>
  );
};
export default HomeComponent;
