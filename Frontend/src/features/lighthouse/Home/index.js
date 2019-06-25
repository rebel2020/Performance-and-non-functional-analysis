import React from 'react';
import SolidGauge from 'src/components/solidgauge';
import Filters from '../../Filters';
import './main.scss';

const HomeComponent = () => {
  const flexItems = ['performance', 'accessibility', 'best_practices', 's_e_o', 'p_w_a'].map(
    item => {
      return (
        <div key={item}>
          <SolidGauge name={item} />
        </div>
      );
    }
  );
  return (
    <div className="container">
      <Filters date={'single'} />
      <div className="flexbox">{flexItems}</div>
    </div>
  );
};
export default HomeComponent;
