import React from 'react';

const setSearch = values => {
  const { phase, brand, page, date, toDate,finalUrl,fetchTimeEnd,fetchTimeStart } = values;
  let str = '';
  if (phase) str = `${str}phase=${phase}&`;
  if (brand) str = `${str}brand=${brand}&`;
  if (page||finalUrl) str = `${str}finalUrl=${page||finalUrl}&`;
  if (date||fetchTimeStart) str = `${str}fetchTimeStart=${date||fetchTimeStart}&`;
  if (toDate||fetchTimeEnd) str = `${str}fetchTimeEnd=${toDate||fetchTimeEnd}`;
  return str;
};

export {setSearch};
