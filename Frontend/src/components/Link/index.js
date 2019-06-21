import React from "react";
import { Link } from "react-router-dom";
import "./main.scss";

const Links = props => {
  const { children, className, to } = props;
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

export default Links;
