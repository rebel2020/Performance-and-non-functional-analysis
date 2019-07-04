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

const getHtmlDate = time => {
  const d = new Date(0);
  d.setUTCMilliseconds(time);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const date = `${year}-${month > 9 ? month : `0${month}`}-${day > 9 ? day : `0${day}`}`;
  // console.log(time);
  return date;
};

const dateOfAverage = obj2 => {
  // console.log(obj2);
  const obj = obj2._id;
  const date = `${obj.year}-${obj.month}-${obj.day}`;
  const time = new Date(date).getTime();
  // console.log(`average ${new Date(date).getTime()}`);
  return time + 19800000;
};
export { getTimeRange, getDate, getHtmlDate, dateOfAverage };
