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
        <div className="alert alert-warning text-center warning" role="alert">
          <span className="close" data-dismiss="alert" onClick={() => this.hideAlert()}>
            &times;
          </span>
          <a className="hover_cursor" onClick={() => this.props.history.push('/alerts')}>
            You have &nbsp;
            {this.props.numalerts}
            &nbsp;alerts
          </a>
        </div>
      );
    }
    return <div />;
  }
}

export default Alert;
