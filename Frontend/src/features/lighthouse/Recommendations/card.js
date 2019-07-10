import React from 'react';
import './main.scss';

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // function myFunction() {
  //   var str = {this.props.value};
  //   var res = str.replace(///gi, "\");
  //   return res;
  // }

  render() {
    return (
      <>
        <div className="collapsible col s11 m11 collbord">
          <input type="checkbox" id={`collapsible-${this.props.field}`} />

          <label htmlFor={`collapsible-${this.props.field}`}> {this.props.field}</label>

          <div className={`collbase collapsible-${this.props.field}-area`}>
            <p className="text-left col s11">
              <b>ENV :</b>
            </p>
            <br />
            <p className="text-left col s11">
              <b>Brand :</b>
            </p>
            <br />
            <p className="text-left col s11">
              <b>Score :</b>
            </p>
            <br />
            <p className="text-left col s11">
              <b>Weight :</b>
            </p>
            <br />
            <p className="text-left col s11">
              <b>Recommendation :</b>
              {this.props.value}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Cards;
