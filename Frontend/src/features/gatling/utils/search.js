import React from 'react';

const setSearch = values => {
  const { phase, brand, page, date, toDate } = values;
  let str = '';
  if (phase) str = `${str}phase=${phase}&`;
  if (brand) str = `${str}brand=${brand}&`;
  if (page) str = `${str}finalUrl=${page}&`;
  if (date) str = `${str}fetchTimeStart=${date}&`;
  if (toDate) str = `${str}fetchTimeEnd=${toDate}`;
  return str;
};

export {setSearch};
