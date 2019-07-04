import React, { useState } from 'react';

import Link from 'src/components/Link';
import useGlobal from 'src/store';
import { FaHome, FaTruckLoading, FaUniversalAccess, FaSearch } from 'react-icons/fa';
import { MdCompareArrows, MdTrendingUp, MdAddAlert } from 'react-icons/md';
import { GoGraph } from 'react-icons/go';
import { TiMessages, TiStarOutline } from 'react-icons/ti';

import './main.scss';

const Sidebar = props => {
  const [globalState, globalActions] = useGlobal();
  const { toggle } = globalState;
  const sideClass = toggle ? 'sidenav' : 'sidenav-collapse';
  return (
    <div className={sideClass}>
      <div className="row">
        <div className="text-center col m12">
          <button
            className="btn--float bg--paper color--black"
            type="button"
            onClick={() => globalActions.toggle()}
          >
            {toggle ? '<<' : '>>'}
          </button>
        </div>
      </div>
      <Link className="sidelink" to="/lighthouse">
        <div className="sidelink">
          <div className="text-center">
            <FaHome />
          </div>
          {toggle ? 'Home' : ''}
        </div>
      </Link>
      <Link className="sidelink" to="/lighthouse/performance">
        <div className="sidelink">
          <div className="txt-center">
            <GoGraph />
          </div>
          {toggle ? 'Performance' : ''}
        </div>
      </Link>
      <Link className="sidelink" to="/lighthouse/accessibility">
        <div className="sidelink">
          <div className="txt-center">
            <FaUniversalAccess />
          </div>

          {toggle ? 'Accessibility' : ''}
        </div>
      </Link>

      <Link className="sidelink" to="/lighthouse/pwa">
        <div className="sidelink">
          <div className="txt-center">
            <MdTrendingUp />
          </div>

          {toggle ? 'PWA' : ''}
        </div>
      </Link>
      <Link className="sidelink" to="/lighthouse/seo">
        <div className="sidelink">
          <div className="txt-center">
            <FaSearch />
          </div>

          {toggle ? 'SEO' : ''}
        </div>
      </Link>
      <Link className="sidelink" to="/lighthouse/best_practices">
        <div className="sidelink">
          <div className="txt-center">
            <TiStarOutline />
          </div>

          {toggle ? 'Best Practices' : ''}
        </div>
      </Link>
      <Link className="sidelink" to="/Recommendations">
        <div className="sidelink">
          <div className="txt-center">
            <TiMessages />
          </div>

          {toggle ? 'Recommendations' : ''}
        </div>
      </Link>
      <Link className="sidelink" to="/alerts">
        <div className="sidelink">
          <div className="txt-center">
            <MdAddAlert />
          </div>
          {toggle ? 'Alerts' : ''}
        </div>
      </Link>
      <Link className="sidelink" to="/gatling">
        <div className="sidelink">
          <div className="txt-center">
            <FaTruckLoading />
          </div>

          {toggle ? 'Gatling' : ''}
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
