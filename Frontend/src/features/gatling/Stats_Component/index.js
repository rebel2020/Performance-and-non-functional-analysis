import React from 'react';
import './styles.scss';

const StatsComponent = props => {
  return (
    <>
      <div className="container statcomp text-center">
        <div className="row col m12">
          <h5>Publisher Stats</h5>
        </div>
        <div className="row">
          <div className="col m4">CPU:</div>
          <div className="col m4">RAM:</div>
          <div className="col m4">JVM:</div>
        </div>
      </div>
      <br />
      <div className="container statcomp text-center">
        <div className="row col m12">
          <h5>Dispatcher Stats</h5>
        </div>
        <div className="row">
          <div className="col m4">CPU:</div>
          <div className="col m4">RAM:</div>
          <div className="col m4">JVM:</div>
        </div>
      </div>
    </>
  );
};

export default StatsComponent;
