import React from 'react';
// import './main.scss';

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { value } = this.props;
    const recommendationList = value.split(/\d*\./).filter(val => !!val.trim());
    return (
      <div className="a">
        <div className="collapsible col m11">
          <input type="checkbox" id={`collapsible-${this.props.field}`} />

          <label htmlFor={`collapsible-${this.props.field}`}>
            {' '}
            <font>{this.props.field}</font>
          </label>

          <div className={`collapsible-${this.props.field}-area`}>
            <p className="text-left col s11">
              <font color="green">Score :</font>
              <font color="white">{this.props.score}</font>
            </p>
            <br />
            <p className="text-left col s11">
              <font color="green">Weight :</font>
              <font color="white">{this.props.weight}</font>
            </p>
            <br />
            <p className="text-left col s11">
              <font color="green">Recommendation :</font>
              <font color="white">
                <ul>
                  {recommendationList.map((val, idx) => (
                    <li key={val}>{val}</li>
                  ))}
                </ul>
              </font>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
