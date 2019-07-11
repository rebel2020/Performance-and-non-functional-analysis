import React, { useEffect, useState } from 'react';
import useGlobal from 'src/store';
import { LIGHTHOUSE_RECOMMENDATIONS } from 'src/components/graphql/Queries';
import FetchData from 'src/components/graphql/utils';
import Collapse from './page_collapsible';
// import Sidebar from '../../Sidebar/index';
// import './main.scss';

const RecommendationsPage = props => {
  // const [globalState] = useGlobal();
  // const { toggle } = globalState;

  return (
    <>
      {/* <Sidebar /> */}
      {/* <div className={toggle ? 'main' : 'main-extend'}> */}
      <center>
        <br />
        <u>
          {' '}
          <font color="white">
            {' '}
            <h1>Page Level Recommendations</h1>
          </font>
        </u>
        <br />
        <br />
        <div>
          {' '}
          <Collapse />
        </div>
      </center>
      {/* {query} */}
      {/* </div> */}
    </>
  );
};
export default RecommendationsPage;
