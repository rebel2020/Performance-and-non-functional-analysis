const getTimeRange = time => {
  const d = new Date(0);
  d.setUTCMilliseconds(time);
  const date1 = `${d.getFullYear()}.${d.getMonth()}.${d.getDate()}`;
  const date2 = `${d.getFullYear()}.${d.getMonth()}.${d.getDate() + 1}`;
  console.log(new Date(date1).valueOf());
};
export default getTimeRange;
