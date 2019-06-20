import React, { Component } from "react";
import { hot } from "react-hot-loader";
import ReactHighcharts from "react-highcharts";
// import "./App.css";
var config = {
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
  },
  series: [
    {
      data: [
        29.9,
        71.5,
        106.4,
        129.2,
        144.0,
        176.0,
        135.6,
        148.5,
        216.4,
        194.1,
        295.6,
        454.4
      ]
    }
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello </h1>
        <ReactHighcharts config={config}></ReactHighcharts>
      </div>
    );
  }
}

export default hot(module)(App);
