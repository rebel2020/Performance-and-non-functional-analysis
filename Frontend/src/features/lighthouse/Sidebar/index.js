import React, { useState } from 'react';
import Button from 'src/components/button';
import Link from 'src/components/Link';

import './main.scss';

const Sidebar = props => {
  let { toggle, setToggle } = props;
  let sideClass = toggle ? 'sidenav' : 'sidenav-collapse';
  return (
    <div className={sideClass}>
      <Button className="sidelink" onClick={() => setToggle(toggle ? false : true)}>
        {toggle ? 'X' : '='}
      </Button>
      <Link className="sidelink" to="/lighthouse">
        <div className="sidelink">{toggle ? 'Home' : ''}</div>
      </Link>
      <Link className="sidelink" to="/lighthouse/performance">
        <div className="sidelink">{toggle ? 'Performance' : ''}</div>
      </Link>
      <Link className="sidelink" to="/lighthouse/accessibility">
        <div className="sidelink">{toggle ? 'Accessibility' : ''}</div>
      </Link>
    </div>
  );
};

export default Sidebar;
