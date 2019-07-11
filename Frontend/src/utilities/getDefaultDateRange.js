import { getDate } from './timeConversions';

const today = new Date();
const defaultDate = new Date(getDate(today.getTime(), -7)).getTime();
const defaultToDate = new Date(getDate(today.getTime(), 1)).getTime() - 1;

const getDefaultDateRange = () => {
  return { date: defaultDate, toDate: defaultToDate };
};

export default getDefaultDateRange;
