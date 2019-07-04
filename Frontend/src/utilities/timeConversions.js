const getTimeRange = time => {
  const d = new Date(0);
  d.setUTCMilliseconds(time);
  const date1 = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  const date2 = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() + 1}`;
  return {
    fetchTimeStart: new Date(date1).getTime().toString(),
    fetchTimeEnd: new Date(date2).getTime().toString()
  };
};

const getDate = (time, num) => {
  const d = new Date(0);
  d.setUTCMilliseconds(time);
  const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() + num}`;
  return date;
};
export { getTimeRange, getDate };
