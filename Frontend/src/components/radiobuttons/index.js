import './styles.scss';
import React, {useState} from 'react';

const RadioButtons = props => {
  const setRadio = event => {
    // console.log(event.target.value);
  };
  const [check, setCheck] = useState(0)
  const { values } = props;
  let radiotype = <></>;
  const radiotxt = values.map((i, item) => {
    console.log(values[item]);

    if (!item) {
      radiotype = <input type="radio" name="graph_option" value={values[0].value} defaultChecked />;
    } else {
      radiotype = <input type="radio" name="graph_option" value={values[item].value} />;
    }
    return (
      <>
        {radiotype}
        &nbsp;
        {values[item].name}
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
