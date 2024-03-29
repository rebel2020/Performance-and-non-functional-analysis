import React from 'react';
import Input from '../Input';

const Datalist = props => {
  const { options, listId, value, className, onChange, placeholder } = props;
  return (
    <>
      <Input
        className={className}
        list={listId}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="search"
      />
      <datalist id={listId} placeholder={placeholder}>
        {/* <option value="Performance"/>
    <option value="Accessibility"/>
    <option value="SEO"/> */}
        {options.length <= 0 ? 'No data' : options.map(item => <option key={item} value={item} />)}
      </datalist>
    </>
  );
};

export default Datalist;
