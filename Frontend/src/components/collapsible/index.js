import React from 'react';
import formatString from 'src/utilities/formatString';
import './styles.scss';

const Collapsible = props => {
  const { metric, history, k, title, desc, score, weight, nv, link } = props;
  const sch = Math.round(score * 100);
  let sccol;
  if (sch <= 25) {
    sccol = 'low';
  } else if (sch > 25 && sch <= 80) {
    sccol = 'mid';
  } else {
    sccol = 'high';
  }
  // console.log(title);
  return (
    <>
      <div className="row">
        <div className="collapsible collbord col s11">
          <input type="checkbox" id={`collapsible-${k}`} />
          <label htmlFor={`collapsible-${k}`}>
            <div className="col s11">{formatString(title)}</div>
            <div className={`col s1 right ${sccol}`}>{sch}</div>
          </label>

          <div className={`collbase collapsible-${k}-area`}> 
            <div className="row">
              <p className=" col m6">{desc}</p>
              <p className="text-right col s6">
                Score:&nbsp;
                <span className={`${sccol}`}> {sch}</span>
              </p>
            </div>
            <br />
            <div className="row">
              <p className=" col s6">
                Weightage:&nbsp;
                {weight}
              </p>
              <p className="text-right col s6">
                NumericValue:&nbsp;
                {nv}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
