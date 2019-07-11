import React, { useEffect, useState } from 'react';
import Collapsible from '../collapsible';

import './main.scss';

const Recommendations = props => {
  const contents = [
    'performance',
    'accessibility',
    'best_practices',
    's_e_o',
    'progressive_web_app'
  ].map(k => <Collapsible key={k} k={k} title={k} />);
  return (
    <>
      <div className="alertpageheader text-center">
        <h1>Global Recommendations</h1>
      </div>
      {contents}
    </>
  );
};
export default Recommendations;
