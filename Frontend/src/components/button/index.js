import React from 'react';

const Button = props => {
  const { name, className, onClick, children, type } = props;
  return (
    <button
      type="button"
      name={name}
      className="btn--raised text-center"
      onClick={e => onClick.bind()(e)}
    >
      {children}
    </button>
  );
};

export default Button;
