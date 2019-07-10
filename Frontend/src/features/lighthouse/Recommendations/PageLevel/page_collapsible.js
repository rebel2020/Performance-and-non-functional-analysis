import React, { useEffect, useState } from 'react';
import useGlobal from 'src/store';
import { LIGHTHOUSE_RECOMMENDATIONS, lighthouse_Audit_Score } from 'src/components/graphql/Queries';
import FetchData from 'src/components/graphql/utils';
import Cards from './card';

const Collapse = props => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    setQuery(FetchData(LIGHTHOUSE_RECOMMENDATIONS, setData));
  }, []);

  const rec = data.recommendation ? data.recommendation.PerformanceAuditRecommendations : {};
  const arr = Object.keys(rec);

  console.log(arr);

  const display_performance = arr.map(field => <Cards />);

  return (
    <div className="a">
      <div className="collapsible col m11">
        <input type="checkbox" id={`collapsible-${this.props.url}`} />

        <label htmlFor={`collapsible-${this.props.url}`}>
          {' '}
          <font color="blue">{this.props.url}</font>
        </label>

        <div className={`collapsible-${this.props.url}-area`}>
          <div className="collapsible col m11">
            <input type="checkbox" id="collapsible-1" />
            <label htmlFor="collapsible-1">Performance</label>
            <div className="collapsible-1-area">
              <div>{display_performance}</div>
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
  );
};

export default Collapse;
