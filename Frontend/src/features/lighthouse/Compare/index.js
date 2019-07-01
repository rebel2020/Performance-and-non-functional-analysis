/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Checkbox } from '@blueprintjs/core';
import LineChart from './linechart';

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled1: false,
      isEnabled2: false,
      isEnabled3: false,
      isEnabled4: false,
      isEnabled5: false
    };
  }

  handlecheck1 = () => {
    this.setState({
      isEnabled1: !this.state.isEnabled1
    });
  };

  handlecheck2 = () => {
    this.setState({
      isEnabled2: !this.state.isEnabled2
    });
  };

  handlecheck3 = () => {
    this.setState({
      isEnabled3: !this.state.isEnabled3
    });
  };

  handlecheck4 = () => {
    this.setState({
      isEnabled4: !this.state.isEnabled4
    });
  };

  handlecheck5 = () => {
    this.setState({
      isEnabled5: !this.state.isEnabled5
    });
  };

  render() {
    let graph1 = <></>;
    let graph2 = <></>;
    let graph3 = <></>;
    let graph4 = <></>;
    let graph5 = <></>;
    if (this.state.isEnabled1 === true) {
      graph1 = (
        <div className="Chart1">
          <LineChart />
        </div>
      );
    }
    if (this.state.isEnabled2 === true) {
      graph2 = (
        <div className="Chart2">
          <LineChart />
        </div>
      );
    }
    if (this.state.isEnabled3 === true) {
      graph3 = (
        <div className="Chart3">
          <LineChart />
        </div>
      );
    }
    if (this.state.isEnabled4 === true) {
      graph4 = (
        <div className="Chart4">
          <LineChart />
        </div>
      );
    }
    if (this.state.isEnabled5 === true) {
      graph5 = (
        <div className="Chart5">
          <LineChart />
        </div>
      );
    }
    return (
      <div>
        <div>
          <Checkbox
            checked={this.state.isEnabled1}
            label="Performance"
            onChange={this.handlecheck1}
          />
        </div>
        <div>
          <Checkbox checked={this.state.isEnabled2} onChange={this.handlecheck2}>
            {' '}
            Accessibility
          </Checkbox>
        </div>
        <div>
          <Checkbox checked={this.state.isEnabled3} onChange={this.handlecheck3}>
            {' '}
            Best Practices
          </Checkbox>
        </div>
        <div>
          <Checkbox checked={this.state.isEnabled4} onChange={this.handlecheck4}>
            {' '}
            SEO
          </Checkbox>
        </div>
        <div>
          <Checkbox checked={this.state.isEnabled5} onChange={this.handlecheck5}>
            {' '}
            Progressive Web App
          </Checkbox>
        </div>
        <div>
          {graph5}
          {graph4}
          {graph3}
          {graph2}
          {graph1}
        </div>
      </div>
    );
  }
}

export default Compare;
