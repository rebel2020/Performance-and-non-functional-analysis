import React from 'react';
import Input from '../Input';

const Datalist = props => {
  const { options, listId } = props;
  return (
    <>
      <Input className="datalistInput" list={listId} onchange={onchange} />
      <datalist id={listId}>
        {/* <option value="Performance"/>
    <option value="Accessibility"/>
    <option value="SEO"/> */}
        {options.length <= 0 ? 'No data' : options.map(item => <option key={item} value={item} />)}
      </datalist>
    </>
  );
};

export default Datalist;
