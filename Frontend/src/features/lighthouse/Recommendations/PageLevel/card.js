import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import formatString from 'src/utilities/formatString';
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
      <div>
        <div style={{ width: '100%', height: '10%' }}>
          <div className="cardRec">
            <div className="cardRecHead">{formatString(this.props.field)}</div>
            {/* <CardText> */}
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
            {/* </CardText> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
