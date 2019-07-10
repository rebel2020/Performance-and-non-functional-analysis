import React, { useEffect, useState } from 'react';
import useGlobal from 'src/store';
import { LIGHTHOUSE_RECOMMENDATIONS } from 'src/components/graphql/Queries';
import FetchData from 'src/components/graphql/utils';
import Collapse from './page_collapsible';
// import Sidebar from '../../Sidebar/index';
// import './main.scss';

const Recommendations = props => {
  const [globalState] = useGlobal();
  const { toggle } = globalState;

  const [data, setData] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    setQuery(FetchData(LIGHTHOUSE_RECOMMENDATIONS, setData));
  }, []);

  const rec = data.recommendation ? data.recommendation.PerformanceAuditRecommendations : {};
  const arr = Object.keys(rec);
  // console.log(arr);
  const display = arr.map(field => <Collapse key={field} url={field} />);

  return (
    <>
      {/* <Sidebar /> */}
      <div className={toggle ? 'main' : 'main-extend'}>
        <center>
          <br />
          <u>
            {' '}
            <h1>Page Level Recommendations</h1>
          </u>
          <br />
          <br />
          {/* <div>{display}</div> */}
        </center>
        {/* {query} */}
      </div>
    </>
  );
};
export default Recommendations;
