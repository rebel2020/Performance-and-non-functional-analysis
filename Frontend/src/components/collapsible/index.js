import React from 'react';
import formatString from 'src/utilities/formatString';
import './styles.scss';

const Collapsible = props => {
  const { metric, history, k, title, desc, score, weight, nv, link } = props;
  const sch = Math.round(score * 100);
  // console.log(title);
  return (
    <>
      <div className="row">
        <div className="collapsible collbord col m11">
          <input type="checkbox" id={`collapsible-${k}`} />
          <label htmlFor={`collapsible-${k}`}>{formatString(title)}</label>
          <div className={`collbase collapsible-${k}-area`}>
            <div className="row">
              <p className=" col m6">{desc}</p>
              <p className="text-right col m6">
                Score:&nbsp;
                {sch}
              </p>
            </div>
            <br />
            <div className="row">
              <p className=" col m6">
                Weightage:&nbsp;
                {weight}
              </p>
              <p className="text-right col m6">
                NumericValue:&nbsp;
                {nv}
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
