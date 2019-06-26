import React from 'react';
import Input from '../Input';

const Datalist = props => {
  const { options, listId, className, onChange } = props;
  return (
    <>
      <Input className={'datalistInput ' + className} list={listId} onChange={onChange} />
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
