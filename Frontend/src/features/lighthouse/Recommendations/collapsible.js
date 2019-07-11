import React, { useState, useEffect } from 'react';
import { LIGHTHOUSE_RECOMMENDATIONS } from 'src/components/graphql/Queries';
import FetchData from 'src/components/graphql/utils';
import formatString from 'src/utilities/formatString';
import Cards from './Global/global_collapsible';

const Collapsible = props => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();
  const { k, title } = props;
  useEffect(() => {
    setQuery(FetchData(LIGHTHOUSE_RECOMMENDATIONS, setData));
  }, []);

  console.log(data);
  const map = {
    performance: 'PerformanceAuditRecommendations',
    accessibility: 'PerformanceAuditRecommendations',
    best_practices: 'PerformanceAuditRecommendations',
    s_e_o: 'PerformanceAuditRecommendations',
    progressive_web_app: 'PerformanceAuditRecommendations'
  };
  const rec = data.recommendationDescription ? data.recommendationDescription[map[title]] : {};
  const arr = Object.keys(rec);

  const display = arr.map(field => (
    <Cards key={field} field={formatString(field)} value={rec[field]} score={0.34} weight={3} />
  ));

  return (
    <>
      <br />
      <div className="row">
        <div className="collapsible al col m11">
          <input type="checkbox" id={`collapsible-${k}`} />
          <label className="bg--sidedark color--white" htmlFor={`collapsible-${k}`}>
            {formatString(title)}
          </label>
          <div className={`colar collapsible-${k}-area`}>
            <div>{display}</div>
          </div>
        </div>
      </div>
      {query}
    </>
  );
};

export default Collapsible;
