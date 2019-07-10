import React from 'react';
import { Link } from 'react-router-dom';
import searchParams from 'src/utilities/searchParams';
import setSearch from 'src/utilities/search';
import './main.scss';

const Links = props => {
  const { children, className, to, history } = props;
  const { phase, brand, page, date, toDate, audits, pages } = searchParams(history.location.search);

  return (
    <Link
      className={className}
      to={{ pathname: to, search: setSearch({ phase, brand, date, toDate }) }}
    >
      {children}
    </Link>
  );
};

export default Links;
