import React from 'react';
import Datalist from 'src/components/datalist';
import './main.scss';

const Filters = () => {
  return (
    <div className="row filters">
      <div className="col s10 m6 l4">
        <Datalist listId="urls" options={[]} />
      </div>
    </div>
  );
};
export default Filters;
