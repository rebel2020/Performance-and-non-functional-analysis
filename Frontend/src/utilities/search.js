import { pagesMap } from 'src/utilities/map';

const setSearch = values => {
  const { phase, brand, page, date, toDate } = values;
  let str = '';
  if (phase && phase !== 'All') str = `${str}env=${phase}&`;
  if (brand && brand !== 'All') str = `${str}brand=${brand}&`;
  if (page && page !== 'All') str = `${str}page=${pagesMap[page]}&`;
  if (date) str = `${str}date=${date}&`;
  if (toDate) str = `${str}toDate=${toDate}`;
  return str;
};

export default setSearch;
