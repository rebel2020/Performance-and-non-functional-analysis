import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
// import './main.scss';

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card style={{ width: '90%', height: '60%' }}>
          <CardBody>
            <CardTitle>{this.props.metric}</CardTitle>
            <CardText>
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
                {this.props.recommendation}
              </p>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Cards;
