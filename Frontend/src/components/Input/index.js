import React from 'react';
import './main.scss';

const Input = props => {
  const { className, list, type, onChange, max, min } = props;
  return (
    <input
      className={className}
      list={list}
      type={type}
      max={max}
      min={min}
      onChange={e =>
        onChange ? onChange.bind(this, e.target.value)() : console.log('change not handled')
      }
    />
  );
};

export default Input;
