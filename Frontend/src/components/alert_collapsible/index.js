import React from 'react';
import './styles.scss';

const AlertCollapsible = props => {
  const { k, history, title, desc, perc } = props;
  let alcol;

  if (perc >= 20) {
    alcol = 'bg--iored color--white';
    
  } else {
    alcol = 'bg--ioyellow color--white';
  }

  return (
    <>
      <div className="row">
        <div className="collapsible al col m11">
          <input type="checkbox" id={`collapsible-${k}`} />
          <label htmlFor={`collapsible-${k}`} className={alcol}>
            {title}
          </label>
          <div className={`collapsible-${k}-area`}>
            <div className="row">
              <p className=" col m6">{desc}</p>
              <p className=" col m6 ">Decrease by:{perc}%</p>
            </div>
            <br />

            <br />
            <div className="row">
              <button
                type="button"
                className="btn--raised btn--red left col m4"
                onClick={() =>
                  history.push({
                    pathname: `/lighthouse/Recommendations`
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
