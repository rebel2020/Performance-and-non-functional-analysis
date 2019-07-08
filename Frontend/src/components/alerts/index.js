import React, { Component } from 'react';
import './styles.scss';

class Alert extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isActive: true
    };
  }

  hideAlert() {
    this.setState({
      isActive: false
    });
  }

  render() {
    // console.log(this.props.history);
    if (this.state.isActive) {
      return (
        <div className="alert alert-warning text-center bg--orange" role="alert">
          <span className="close" data-dismiss="alert" onClick={() => this.hideAlert()}>
            &times;
          </span>
          <a className="hover_cursor" onClick={() => this.props.history.push('/lighthouse/alerts')}>
            <h3>
              You have&nbsp;
              {this.props.numalerts}
              &nbsp;alert(s) pending
            </h3>
          </a>
        </div>
      );
    }
    return <div />;
  }
}

export default Alert;
