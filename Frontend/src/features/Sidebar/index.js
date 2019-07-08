import React, { useState, useEffect } from 'react';

import Link from 'src/components/Link';
import useGlobal from 'src/store';
import { FaHome, FaTruckLoading, FaUniversalAccess, FaSearch } from 'react-icons/fa';
import { MdCompareArrows, MdTrendingUp, MdAddAlert } from 'react-icons/md';
import { GoGraph } from 'react-icons/go';
import { IoIosArrowForward, IoIosArrowBack, IoIosMenu } from 'react-icons/io';

import { TiMessages, TiStarOutline } from 'react-icons/ti';

import './main.scss';

const Sidebar = props => {
  const [globalState, globalActions] = useGlobal();
  const { toggle } = globalState;
  const [mob, setMob] = useState(false);
  const sideClass = toggle ? 'sidenav' : 'sidenav-collapse';
  const mobClass = mob ? 'mobOpen' : 'mobClose';
  useEffect(() => {
    const main = document.getElementsByClassName('main')[0];
    main.addEventListener(
      'click',
      e => {
        console.log(e.target.nodeName);
        setMob(false);
      },
      { capture: true }
    );
  }, []);
  const Links = (
    <>
      <Link {...props} className="sidelink" to="/lighthouse">
        <div className="sidelink">
          <div className="text-center">
            <h2 className="sidelink">
              <FaHome />
            </h2>
          </div>
          {toggle ? 'Home' : ''}
        </div>
      </Link>
      <Link {...props} className="sidelink" to="/lighthouse/performance">
        <div className="sidelink">
          <div className="txt-center">
            <h2>
              <GoGraph />
            </h2>
          </div>
          {toggle ? 'Performance' : ''}
        </div>
      </Link>
      <Link {...props} className="sidelink" to="/lighthouse/accessibility">
        <div className="sidelink">
          <div className="txt-center">
            <h2>
              <FaUniversalAccess />
            </h2>
          </div>

          {toggle ? 'Accessibility' : ''}
        </div>
      </Link>

      <Link {...props} className="sidelink" to="/lighthouse/p_w_a">
        <div className="sidelink">
          <div className="txt-center">
            <h2>
              <MdTrendingUp />
            </h2>
          </div>

          {toggle ? 'PWA' : ''}
        </div>
      </Link>
      <Link {...props} className="sidelink" to="/lighthouse/s_e_o">
        <div className="sidelink">
          <div className="txt-center">
            <h2>
              <FaSearch />
            </h2>
          </div>

          {toggle ? 'SEO' : ''}
        </div>
      </Link>
      <Link {...props} className="sidelink" to="/lighthouse/best_practices">
        <div className="sidelink">
          <div className="txt-center">
            <h2>
              <TiStarOutline />
            </h2>
          </div>

          {toggle ? 'Best Practices' : ''}
        </div>
      </Link>
      <Link {...props} className="sidelink" to="/lighthouse/recommendations">
        <div className="sidelink">
          <div className="txt-center">
            <h2>
              <TiMessages />
            </h2>
          </div>

          {toggle ? 'Recommendations' : ''}
        </div>
      </Link>
      <Link {...props} className="sidelink" to="/lighthouse/alerts">
        <div className="sidelink">
          <div className="txt-center">
            <h2>
              <MdAddAlert />
            </h2>
          </div>
          {toggle ? 'Alerts' : ''}
        </div>
      </Link>
      <Link {...props} className="sidelink" to="/gatling">
        <div className="sidelink">
          <div className="txt-center">
            <h2>
              <FaTruckLoading />
            </h2>
          </div>

          {toggle ? 'Gatling' : ''}
        </div>
      </Link>
    </>
  );
  return (
    <>
      <div className="nav">
        <h2>
          <IoIosMenu className="sidelink" onClick={() => setMob(!mob)} />
        </h2>
      </div>
      <div className={mobClass}>{Links}</div>
      <div className={sideClass}>
        <div className="row">
          <div className="text-center col m12">
            <button
              className="btn--flat bg--customgrey color--white"
              type="button"
              onClick={() => globalActions.toggle()}
            >
              {toggle ? (
                <h2>
                  <IoIosArrowBack />
                </h2>
              ) : (
                <h2>
                  <IoIosArrowForward />
                </h2>
              )}
            </button>
          </div>
        </div>
        {Links}
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
    </>
  );
};

export default Sidebar;
