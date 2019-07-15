import React from 'react';

const search = values => {
  const { phase, brand, page, date, toDate,finalUrl,fetchTimeEnd,fetchTimeStart } = values;
  let str = '';
  if (phase && phase !== 'All') str = `${str}phase=${phase}&`;
  if (brand && brand !== 'All') str = `${str}brand=${brand}&`;
  if ((page||finalUrl) && page!== 'All' && finalUrl!== 'All') str = `${str}finalUrl=${page||finalUrl}&`;
  if (date||fetchTimeStart) str = `${str}fetchTimeStart=${date||fetchTimeStart}&`;
  if (toDate||fetchTimeEnd) str = `${str}fetchTimeEnd=${toDate||fetchTimeEnd}`;
  return str;
};

export { search };
