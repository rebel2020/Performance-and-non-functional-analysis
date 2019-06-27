import React, { useState, useEffect } from 'react';
import SolidGauge from 'src/components/solidgauge';
import Filters from '../../Filters';
import './main.scss';

const HomeComponent = () => {
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
      <Filters date="single" options={['hello', 'react']} />
      <div className="flexbox">{flexItems}</div>
    </div>
  );
};
export default HomeComponent;
