import React from "react";
import "./main.scss";

const Input = props => {
  const { className, list, type, onchange } = props;
  return (
    <input
      className={className}
      list={list}
      type={type}
      onChange={e =>
        onchange
          ? onchange.bind(this, e.target.value)()
          : console.log("change not handled")
      }
    />
  );
};

export default Input;
