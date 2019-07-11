import React, { useEffect, useState } from 'react';
import useGlobal from 'src/store';
import { LIGHTHOUSE_RECOMMENDATIONS } from 'src/components/graphql/Queries';
import FetchData from 'src/components/graphql/utils';
import Cards from './card';

const Collapse = props => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    setQuery(FetchData(LIGHTHOUSE_RECOMMENDATIONS, setData));
  }, []);

  const rec = data.recommendationDescription
    ? data.recommendationDescription.PerformanceAuditRecommendations
    : {};
  const arr = Object.keys(rec);

  const display = arr.map(field => (
    <Cards key={field} field={field} score={0.34} weight={3} value={rec[field]} />
  ));
  console.log(data);

  return (
    <>
      <div className="a ">
        <div className="collapsible col m11">
          <input type="checkbox" id="collapsible-6" />

          <label htmlFor="collapsible-6">
            {' '}
            <font color="white">http://fca-qa1-alfaromeousa-sape.test.com/world</font>
          </label>

          <div className="collapsible-6-area">
            <div className="collapsible col m11">
              <input type="checkbox" id="collapsible-1" />
              <label htmlFor="collapsible-1">Performance</label>
              <div className="collapsible-1-area">
                <div>{display}</div>
              </div>
            </div>

            <div className="collapsible  col m11 Accessibility">
              <input type="checkbox" id="collapsible-2" />
              <label htmlFor="collapsible-2">Accessibility</label>

              <div className="collapsible-2-area">{/* <div>{display_accessibility}</div> */}</div>
            </div>

            <div className="collapsible  col m11 Best Practices">
              <input type="checkbox" id="collapsible-3" />

              <label htmlFor="collapsible-3">Best Practices</label>

              <div className="collapsible-3-area">{/* <div>{display_best_practice}</div> */}</div>
            </div>

            <div className="collapsible  col m11 SEO">
              <input type="checkbox" id="collapsible-4" />

              <label htmlFor="collapsible-4">SEO</label>

              <div className="collapsible-4-area">{/* <div>{display_SEO}</div> */}</div>
            </div>

            <div className="collapsible  col m11 Best Practices">
              <input type="checkbox" id="collapsible-5" />

              <label htmlFor="collapsible-5">Progressive Web App</label>

              <div className="collapsible-5-area">{/* <div>{display_progressive}</div> */}</div>
            </div>
          </div>
        </div>
      </div>
      {query}
    </>
  );
};

export default Collapse;
