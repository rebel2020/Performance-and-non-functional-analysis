import React from 'react';

const SelectList = props => {
  const { options } = props;
  return (
    <>
      <select>
        {options.length <= 0
          ? 'No data'
          : options.map(item => (
              <option key={item} value={item}>
              {item}
            </option>
            ))}
      </select>
    </>
  );
};

export default SelectList;
