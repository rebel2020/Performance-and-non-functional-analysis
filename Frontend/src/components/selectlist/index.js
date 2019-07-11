import React, { useEffect } from 'react';

const SelectList = props => {
  const { options, label, className, listId, value, onChange, placeholder } = props;
  const items = options.map(item => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
  console.log(value);
  // useEffect(() => {
  //   const selects = document.getElementsByClassName(className);
  //   console.log(selects);
  //   for (const select of selects) {
  //     select.addEventListener('mouseover', e => {
  //       console.log(select);
  //       select.click();
  //     });
  //   }
  // }, []);
  return (
    <select
      defaultValue={value}
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
