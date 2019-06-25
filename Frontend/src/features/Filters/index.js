import React from 'react';
import Datalist from 'src/components/datalist';
import Input from 'src/components/Input';
import './main.scss';

const Filters = () => {
  return (
    <div className="row filters">
      <div className="col s10 m6 l4">
        <Datalist listId="urls" options={[]} />
      </div>
      <div className="col s6 m3 l4">
        <Input type="date" max="2020-12-31" min="2010-12-31" />
      </div>
    </div>
  );
};
export default Filters;
