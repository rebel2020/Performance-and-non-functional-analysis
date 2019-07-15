import React from 'react';
import { Link } from 'react-router-dom';
import searchParams from 'src/utilities/searchParams';
import setSearch from 'src/utilities/search';
import getDefaultDateRange from 'src/utilities/getDefaultDateRange';
import './main.scss';
import {search} from '../../features/gatling/utils/search'
const Links = props => {
  const { children, className, to, history } = props;
  const { phase, brand, page, finalUrl, fetchTimeStart,fetchTimeEnd } = searchParams(history.location.search);
  console.log(finalUrl,fetchTimeEnd,fetchTimeStart);
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
        search: arr.includes(to) ? setSearch({ phase, brand, page, ...getDefaultDateRange() }) : 
          to ==='/gatling'? search({ phase, brand,fetchTimeStart,fetchTimeEnd }) : 
          ''
      }}
    >
      {children}
    </Link>
  );
};

export default Links;
