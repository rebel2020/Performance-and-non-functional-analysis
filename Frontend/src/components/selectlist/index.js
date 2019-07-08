import React from 'react';

const SelectList = props => {
  const { options, label, className, listId, value, onChange, placeholder } = props;
  const items = options.map(item => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
  return (
    <select
      className={className}
      placeholder={placeholder}
      onChange={e =>
        onChange ? onChange.bind(this, e.target.value)() : console.log('change not handled')
      }
    >
      {items}
    </select>
  );
};

export default SelectList;
