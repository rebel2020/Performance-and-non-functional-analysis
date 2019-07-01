const getTimeRange = time => {
  const d = new Date(0);
  d.setUTCMilliseconds(time);
  const date1 = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  const date2 = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() + 1}`;
  return { fromTime: new Date(date1).getTime(), toTime: new Date(date2).getTime() };
};

const getDate = time => {
  const d = new Date(0);
  d.setUTCMilliseconds(time);
  const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  return date;
};
export { getTimeRange, getDate };
