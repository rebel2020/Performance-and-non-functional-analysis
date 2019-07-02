import './styles.scss';
import React from 'react';

const RadioButtons = props => {
  const setRadio = event => {
    // console.log(event.target.value);
  };
  const { values } = props;
  const radiotxt = values.map((text, value) => {
    return (
      <>
        <input type="radio" name="graph_option" value={value} />
        &nbsp;
        {text}
        <br />
        <br />
      </>
    );
  });
  return (
    <div className="radio_buttons" onChange={setRadio.bind(this)}>
      {radiotxt}
    </div>
  );
};

export default RadioButtons;
