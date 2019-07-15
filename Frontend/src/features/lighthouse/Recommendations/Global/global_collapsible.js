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
      <>
        <div className="row">
          <div className="collapsible bg--sidedark1  al col m11">
            <input type="checkbox" id={`collapsible-${this.props.field}`} />
            <label className="color--white" htmlFor={`collapsible-${this.props.field}`}>
              {this.props.field}
            </label>

            <div className={`colar collapsible-${this.props.field}-area`}>
              <div>
                {/* <p className="text-left col s11">
                  <font color="green">Avg. Score : </font>
                  {this.props.score}
                </p>
                <br />
                <p className="text-left col s11">
                  <font color="green">Weight : </font>
                  {this.props.weight}
                </p> */}
                <br />
                <p className="text-left col s11">
                  <font color="green">Recommendations : </font>
                  <ul>
                    {recommendationList.map((val, idx) => (
                      <li key={val}>{val}</li>
                    ))}
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </>
    );
  }
}

export default Cards;
