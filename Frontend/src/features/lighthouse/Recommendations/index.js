import React, { useEffect, useState } from 'react';
import useGlobal from 'src/store';
import { LIGHTHOUSE_RECOMMENDATIONS, lighthouse_Audit_Score } from 'src/components/graphql/Queries';
import FetchData from 'src/components/graphql/utils';
import Cards from './card';
import Sidebar from '../../Sidebar/index';
// import './main.scss';

const Recommendations = props => {
  const [globalState] = useGlobal();
  const { toggle } = globalState;
  const { history } = props;
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();

  // const [data1, setData1] = useState([]);
  // const [query1, setQuery1] = useState();

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
  const arr1 = Object.keys(rec);
  const arr2 = Object.keys(rec);
  const arr3 = Object.keys(rec);
  const arr4 = Object.keys(rec);
  const arr5 = Object.keys(rec);
  console.log(arr1);

  const display_performance = arr1.map(field => (
    <Cards
      key={field}
      field={formatString(field)}
      value={rec[field]}
      // score={sc[0]}
      // weight={sc[1]}
    />
  ));

  const display_accessibility = arr2.map(field => (
    <Cards
      key={field}
      field={formatString(field)}
      value={rec[field]}
      // score={sc[0]}
      // weight={sc[1]}
    />
  ));

  const display_best_practice = arr3.map(field => (
    <Cards
      key={field}
      field={formatString(field)}
      value={rec[field]}
      // score={sc[0]}
      // weight={sc[1]}
    />
  ));

  const display_SEO = arr4.map(field => (
    <Cards
      key={field}
      field={formatString(field)}
      value={rec[field]}
      // score={sc[0]}
      // weight={sc[1]}
    />
  ));

  const display_progressive = arr5.map(field => (
    <Cards
      key={field}
      field={formatString(field)}
      value={rec[field]}
      // score={sc[0]}
      // weight={sc[1]}
    />
  ));

  return (
    <>
      <Sidebar history={history} />
      <div className={toggle ? 'main' : 'main-extend'}>
<<<<<<< HEAD
        <center>
          <br />
          <u>
            {' '}
            <h1>Recommendations </h1>
          </u>
          <br />
          <br />
          <div className="collapsible col m11">
            <input type="checkbox" id="collapsible-1" />
            <label htmlFor="collapsible-1">Performance</label>

            <div className="collapsible-1-area">
              <div>{display_performance}</div>
            </div>
          </div>

          <div className="collapsible  col m11">
            <input type="checkbox" id="collapsible-2" />

            <label htmlFor="collapsible-2">Accessibility</label>

            <div className="collapsible-2-area">{/* <div>{display_accessibility}</div> */}</div>
          </div>

          <div className="collapsible  col m11">
            <input type="checkbox" id="collapsible-3" />

            <label htmlFor="collapsible-3">Best Practices</label>

            <div className="collapsible-3-area">{/* <div>{display_best_practice}</div> */}</div>
          </div>

          <div className="collapsible  col m11">
            <input type="checkbox" id="collapsible-4" />

            <label htmlFor="collapsible-4">SEO</label>

            <div className="collapsible-4-area">{/* <div>{display_SEO}</div> */}</div>
          </div>

          <div className="collapsible  col m11">
            <input type="checkbox" id="collapsible-5" />

            <label htmlFor="collapsible-5">Progressive Web App</label>

            <div className="collapsible-5-area">{/* <div>{display_progressive}</div> */}</div>
          </div>
        </center>
=======
        <br/>
        <div className="text-center">
          <h1>Recommendations </h1>
        </div>

        <br />
        <br />
        <div>{display}</div>

>>>>>>> 1e48df3e2c98e20e9e85708cd849049a5cdd3e57
        {query}
        {/* {query1} */}
      </div>
    </>
  );
};
export default Recommendations;
