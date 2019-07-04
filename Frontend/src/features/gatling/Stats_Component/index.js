import React from 'react';
import './styles.scss';

const StatsComponent = props => {
  return (
    <>
      <div className="container statcomp text-center">
        <h4>Number of requests</h4>
        <br />
        <div className="row">
          <div className="col m4">Passed:</div>
          <div className="col m4">Failed:</div>
          <div className="col m4">Total:</div>
        </div>
      </div>
      <br />
      <br />
      <div className="container statcomp text-center">
        <h4>Publisher Stats</h4>
        <br />
        <div className="row">
          <div className="col m4">CPU:</div>
          <div className="col m4">RAM:</div>
          <div className="col m4">JVM:</div>
        </div>
      </div>
      <br />
      <br />
      <div className="container statcomp text-center">
        <h4>Dispatcher Stats</h4>
        <br />
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
