import React from 'react';
import './main.scss';

const Input = props => {
  const { className, list, type, onChange, max, min, placeholder } = props;
  return (
    <input
      className="datalistInput"
      list={list}
      type={type}
      max={max}
      min={min}
      placeholder={placeholder}
      onChange={e =>
        onChange ? onChange.bind(this, e.target.value)() : console.log('change not handled')
      }
    />
  );
};

export default Input;
