import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

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
        <div className="collapsible col s12 m2 l4" style={{ width: '95%' }}>
          <input type="checkbox" id={`collapsible-${this.props.field}`} />
          <label htmlFor={`collapsible-${this.props.field}`}>{this.props.field}</label>
          <div className={`collapsible-${this.props.field}-area`}>
            <p className="text-left col m6">
              <b>ENV :</b>
            </p>
            <br />
            <p className="text-left col m6">
              <b>Brand :</b>
            </p>
            <br />
            <p className="text-left col m6">
              <b>Score :</b>
            </p>
            <br />
            <p className="text-left col m6">
              <b>Weight :</b>
            </p>
            <br />
            <p className="text-left col m6">
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
