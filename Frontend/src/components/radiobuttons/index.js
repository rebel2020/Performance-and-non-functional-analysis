import './styles.scss';
import React from 'react';
const RadioButtons = props => {
    function setRadio(event) {
      console.log(event.target.value);
    };
    return (
      <div className="radio_buttons" onChange={setRadio.bind(this)}>
        <input type="radio" name="graph_option" value="perc_req" />&nbsp;
        Percentage of Requests Succeeded
        <br />
        <br />
        <input type="radio" name="graph_option" value="num_req" />&nbsp;
        Number of Requets
        <br />
        <br />
        <input type="radio" name="graph_option" value="avg_req_sec" />&nbsp;
        Average Number of Req/Sec
        <br />
        <br />
        <input type="radio" name="graph_option" value="avg_res_time" />&nbsp;
        Average Response Time
        <br /> <br />
      </div>
    );
  };

  export default RadioButtons;