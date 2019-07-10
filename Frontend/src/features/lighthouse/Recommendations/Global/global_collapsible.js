import React from 'react';
// import './main.scss';

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="a">
        <div className="collapsible col m11">
          <input type="checkbox" id={`collapsible-${this.props.field}`} />

          <label htmlFor={`collapsible-${this.props.field}`}>
            {' '}
            <font color="blue">{this.props.field}</font>
          </label>

          <div className={`collapsible-${this.props.field}-area`}>
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
              <p>{this.props.value}</p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
