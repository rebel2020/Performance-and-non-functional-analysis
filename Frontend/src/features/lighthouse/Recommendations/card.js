import React from 'react';
import './main.scss';

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { value } = this.props;
    const recommendationList = value.split(/\d*\./).filter(val => !!val.trim());
    return (
<<<<<<< HEAD
      <div className="a">
        <div className="collapsible col m11">
=======
      <>
        <div className="collapsible col s11 m11 collbord">
>>>>>>> 1e48df3e2c98e20e9e85708cd849049a5cdd3e57
          <input type="checkbox" id={`collapsible-${this.props.field}`} />

          <label htmlFor={`collapsible-${this.props.field}`}> {this.props.field}</label>

          <div className={`collbase collapsible-${this.props.field}-area`}>
            <p className="text-left col s11">
              <font color="green">Score :</font>
              {this.props.score}
            </p>
            <br />
            <p className="text-left col s11">
              <font color="green">Weight :</font>
              {this.props.weight}
            </p>
            <br />
            <p className="text-left col s11">
              <font color="green">Recommendation :</font>
              <ul>
                {recommendationList.map((val, idx) => (
                  <li key={val}>{val}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
