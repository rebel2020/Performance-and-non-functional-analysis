import React from 'react';
import formatString from 'src/utilities/formatString';
import { AuditMap, mapAuditRecommendations } from 'src/utilities/map';
import Cards from './card';

const Collapse = props => {
  const { url, recommend } = props;
  const audits = ['performance', 'accessibility', 'best_practices', 'p_w_a', 's_e_o'].map(item => {
    const auditData = recommend.filter(i => i.audit === AuditMap[item])[0];
    const card = auditData.recommendations.map(metric => {
      return (
        <Cards
          key={`${url}-${metric.name}`}
          url={url}
          audit={mapAuditRecommendations[item]}
          field={metric.name}
          score={metric.average_score}
          weight={metric.weight}
        />
      );
    });
    return (
      <div className="collapsible col m11">
        <input type="checkbox" id={`collapsible-${url}-${item}`} />
        <label htmlFor={`collapsible-${url}-${item}`}>{formatString(item)}</label>
        <div className={`collapsible-${url}-${item}-area`}>{card}</div>
      </div>
    );
  });
  return (
    <>
      <br />
      <div className="row ">
        <div className="collapsible al col m11 bg--sidedark">
          <input type="checkbox" id={`collapsible-${url}`} />
          <label className="color--white" htmlFor={`collapsible-${url}`}>
            {url}
          </label>
          <div className={`collapsible-${url}-area`}>{audits}</div>
        </div>
      </div>
    </>
  );
};

export default Collapse;
