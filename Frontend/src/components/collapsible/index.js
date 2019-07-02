import React from 'react';
import formatString from 'src/utilities/formatString';

const Collapsible = props => {
  const { metric, history, k, title, desc, score, weight, nv, link } = props;
  // console.log(title);
  return (
    <>
      <div className="row">
        <div className="collapsible col m11">
          <input type="checkbox" id={`collapsible-${k}`} />
          <label htmlFor={`collapsible-${k}`}>{formatString(title)}</label>
          <div className={`collapsible-${k}-area`}>
            <div className="row">
              <p className=" col m6">{desc}</p>
              <p className="text-right col m6">
                Score:
                {score}
              </p>
            </div>
            <br />
            <div className="row">
              <p className=" col m6">
                Weightage:
                {weight}
              </p>
              <p className="text-right col m6">
                NumericValue:
                {nv}
              </p>
            </div>
            <br />
            <div className="row">
              <button
                type="button"
                className="btn--raised left col m2"
                // onClick={() =>
                //   history.push({
                //     pathname: `/lighthouse/${metric}`,
                //     search: `audits=${title}`,
                //     audit: title
                //   })
                // }
              >
                Graph
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
