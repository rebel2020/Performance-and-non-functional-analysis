import React from 'react';

const SelectList = props => {
  const { options, label } = props;
  const items = options.map(item => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
  return <select>{items}</select>;
};

export default SelectList;
