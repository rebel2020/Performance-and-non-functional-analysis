import './styles.scss';
import React from 'react';

const RadioButtons=props=> {
    setRadio=(event)=> {
        console.log(event.target.value);
      };
    
    const radiotxt = props.values.map((text,value) =>
    <div className="radio_buttons" onChange={setRadio.bind(this)}>
    <input type="radio" name="graph_option" value={value} />&nbsp;
    {text}
    <br />
    <br />
    
  </div>
    );
    return (
      {radiotxt}
    );
  }


  export default RadioButtons;