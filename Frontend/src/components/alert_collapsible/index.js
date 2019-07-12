import React from 'react';
import './styles.scss';
import formatString from '../../utilities/formatString';

const AlertCollapsible = props => {
  const { k, history, title, desc } = props;
  let alcol;
  let scorecol;
  function compare(a, b) {
    if (a.scoreDiff > b.scoreDiff) {
      return -1;
    }
    if (a.scoreDiff < b.scoreDiff) {
      return 1;
    }
    return 0;
  }
  // sorteddesc =

  const description = desc.map((item, i) => {
    // if (item.scoreDiff > 20) setUrgentData(1);
    desc.sort(compare);
    if (item.scoreDiff >= 20) {
      alcol = ' bg--sidedark color--white';
      scorecol = 'bg--iored';
    } else {
      alcol = 'bg--sidedark color--white';
      scorecol = 'bg--ioyellow';
    }
    return (
      <React.Fragment key={i}>
        <div className="row">
          <p className=" col m6">{formatString(item.name)}</p>
          <p className=" col m6 ">
            Average Drop in Score:&nbsp;
            <div className={`score ${scorecol}`}>{Math.round(item.scoreDiff)}%</div>
          </p>
        </div>

        <div className="row">
          <p className=" col m6">
            Metric:{` `}
            {item.category}
          </p>
        </div>

        <br />
      </React.Fragment>
    );
  });
  return (
    <>
      <div className="row">
        <div className="collapsible al col m11">
          <input type="checkbox" id={`collapsible-${k}`} />
          <label htmlFor={`collapsible-${k}`} className={alcol}>
            {title}
          </label>
          <div className={`colar collapsible-${k}-area`}>
            {description}
            <div className="row">
              <button
                type="button"
                className="btn--raised btn--red left col m4"
                onClick={() =>
                  history.push({
                    pathname: `/lighthouse/pageLevelRecommendations`
                    // search: `recommendation=${title}`,
                    // recommendation: title
                  })
                }
              >
                Show more in recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertCollapsible;
