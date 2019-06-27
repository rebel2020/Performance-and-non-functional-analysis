import React from 'react';

const Button = props => {
  const { name, className, onClick, children, type } = props;
  return (
    <button type="button" name={name} className={className} onClick={e => onClick.bind()(e)}>
      {children}
    </button>
  );
};

export default Button;
