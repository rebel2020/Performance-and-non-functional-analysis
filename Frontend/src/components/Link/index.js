import React from 'react';
import { Link } from 'react-router-dom';
import searchParams from 'src/utilities/searchParams';
import setSearch from 'src/utilities/search';
import getDefaultDateRange from 'src/utilities/getDefaultDateRange';
import './main.scss';

const Links = props => {
  const { children, className, to, history } = props;
  const { phase, brand, page } = searchParams(history.location.search);
  const arr = [
    '/lighthouse/best_practices',
    '/lighthouse/s_e_o',
    '/lighthouse/p_w_a',
    '/lighthouse/accessibility',
    '/lighthouse/performance',
    '/lighthouse'
  ];
  return (
    <Link
      className={className}
      to={{
        pathname: to,
        search: arr.includes(to) ? setSearch({ phase, brand, page, ...getDefaultDateRange() }) : ''
      }}
    >
      {children}
    </Link>
  );
};

export default Links;
