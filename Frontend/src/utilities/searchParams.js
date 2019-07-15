import { getDate } from './timeConversions';
import { pagesMap } from './map';

const searchParams = path => {
  const arr = path.substr(1, path.length).split('&');
  const search = {};
  arr.forEach(element => {
    const values = element.split('=');
    const field = values[0];
    const value = values[1];
    search[field] = value;
  });
  search.phase = search.env;
  search.page = Object.keys(pagesMap).filter(p => pagesMap[p] === search.page)[0];
  const today = new Date();
  if (!search.date) search.date = new Date(getDate(today.getTime(), -1)).getTime();
  if (!search.toDate) search.toDate = new Date(getDate(today.getTime(), 1)).getTime() - 1;
  return search;
};

export default searchParams;
