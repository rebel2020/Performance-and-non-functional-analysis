import React, { useState } from 'react';

import Link from 'src/components/Link';
import useGlobal from 'src/store';
import { FaHome, FaTruckLoading, FaUniversalAccess } from 'react-icons/fa';
import { MdCompareArrows } from 'react-icons/md';
import { GoGraph } from 'react-icons/go';

import './main.scss';

const Sidebar = props => {
  const [globalState, globalActions] = useGlobal();
  const { toggle } = globalState;
  const sideClass = toggle ? 'sidenav' : 'sidenav-collapse';
  return (
    <div className={sideClass}>
      <div className="row">
        <div className="text-center col m12">
        <button className="btn--float bg--paper color--black" type="button" onClick={() => globalActions.toggle()}>
          {toggle ? '<<' : '>>'}
        </button>
        </div>
      </div>
      <Link className="sidelink" to="/lighthouse">
        <div className="sidelink">
          {
            <h3>
              <FaHome />
            </h3>
          }
          {toggle ? 'Home' : ''}
        </div>
      </Link>
      <Link className="sidelink" to="/lighthouse/performance">
        <div className="sidelink">
          {
            <h3>
              <GoGraph />
            </h3>
          }
          {toggle ? 'Performance' : ''}
        </div>
      </Link>
      <Link className="sidelink" to="/lighthouse/accessibility">
        <div className="sidelink">
          {
            <h3>
              <FaUniversalAccess />
            </h3>
          }
          {toggle ? 'Accessibility' : ''}
        </div>
      </Link>
      <Link className="sidelink" to="/gatling">
        <div className="sidelink">
          {
            <h3>
              <FaTruckLoading />
            </h3>
          }
          {toggle ? 'Gatling' : ''}
        </div>
      </Link>
      <Link className="sidelink" to="/lighthouse/compare">
        <div className="sidelink">
          {
            <h3>
              <MdCompareArrows />
            </h3>
          }
          {toggle ? 'Compare' : ''}
        </div>
      </Link>
      {/* <Button className="sidelink" onClick={() => changeComponent('home')}>
        {toggle ? 'Home' : ''}
      </Button>
      <Button className="sidelink" onClick={() => changeComponent('performance')}>
        {toggle ? 'Performance' : ''}
      </Button>
      <Button className="sidelink" onClick={() => changeComponent('accessibility')}>
        {toggle ? 'Accessibility' : ''}
      </Button> */}
    </div>
  );
};

export default Sidebar;
