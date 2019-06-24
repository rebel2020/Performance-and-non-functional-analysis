import React from 'react';
import SolidGauge from 'src/components/solidgauge';
// import Select from 'src/components/selectlist';
import Datalist from 'src/components/datalist';
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
  console.log('hello');
  return (
    <>
      <div className="flexbox filters">
        <Datalist listId="urls" options={[]} />
        {/* <Select options={['a', 'b']} /> */}
      </div>
      <div className="flexbox">{flexItems}</div>
    </>
  );
};
export default HomeComponent;
