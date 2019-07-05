import React, { useEffect, useState } from 'react';
import useGlobal from 'src/store';
import { LIGHTHOUSE_RECOMMENDATIONS } from 'src/components/graphql/Queries';
import FetchData from 'src/components/graphql/utils';
import Cards from './card';
import Sidebar from '../../Sidebar/index';
import './main.scss';

const Recommendations = props => {
  const [globalState] = useGlobal();
  const { toggle } = globalState;

  const [data, setData] = useState([]);
  const [query, setQuery] = useState();

  function formatString(string) {
    return string
      .replace(/_/g, ' ')
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  }

  useEffect(() => {
    setQuery(FetchData(LIGHTHOUSE_RECOMMENDATIONS, setData));
  }, []);

  const rec = data.recommendation ? data.recommendation.PerformanceAuditRecommendations : {};
  const arr = Object.keys(rec);
  console.log(arr);
  const display = arr.map(field => (
    <Cards key={field} field={formatString(field)} value={rec[field]} />
  ));

  return (
    <>
      <Sidebar />
      <div className={toggle ? 'main' : 'main-extend'}>
        <center>
          <br />
          <u>
            {' '}
            <h1>Recommendations </h1>
          </u>
          <br />
          <br />
          <div>{display}</div>
        </center>
        {query}
      </div>
    </>
  );
};
export default Recommendations;
