import React from 'react';
import { Link } from 'react-router-dom';
import './main.scss';

const Links = props => {
  const { children, className, to, history } = props;

  return (
    <Link className={className} to={{ pathname: to, search: history.location.search }}>
      {children}
    </Link>
  );
};

export default Links;
