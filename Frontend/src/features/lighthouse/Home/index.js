import React from 'react';
import SolidGauge from 'src/components/solidgauge';
// import Select from 'src/components/selectlist';
import Datalist from 'src/components/datalist';
import Input from 'src/components/Input';
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
        <Datalist listId="urls" placeholder="urls" options={[]} />
        <Input type="date" max="2020-12-31" min="2010-12-31" />
        {/* <Select options={['a', 'b']} /> */}
      </div>
      <div className="flexbox">{flexItems}</div>
    </>
  );
};
export default HomeComponent;
