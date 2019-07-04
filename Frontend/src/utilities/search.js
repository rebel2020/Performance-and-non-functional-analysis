import React from 'react';

const setSearch = values => {
  const { phase, brand, page, date, toDate } = values;
  let str = '';
  if (phase) str = `${str}env=${phase}&`;
  if (brand) str = `${str}brand=${brand}&`;
  if (page) str = `${str}page=${page}&`;
  if (date) str = `${str}date=${date}&`;
  if (toDate) str = `${str}toDate=${toDate}`;
  return str;
};

export default setSearch;
