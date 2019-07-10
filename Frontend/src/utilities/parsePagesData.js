import React from 'react';
import { dateFormat } from 'highcharts';

const pagesData = (data, metric) => {
  if (!data) return;
  // const arr = data.map(obj => {
  //   return {
  //     scores: [{ score: obj.audits[`${metric}_audits`].score, time: obj.fetchTime }],
  //     finalUrl: obj.finalUrl
  //   };
  // });
  // const set = Array.from(new Set(arr.map(a => a.finalUrl))).map(finalUrl => {
  //   return arr.find(a => a.finalUrl === finalUrl);
  // });
  //   .sort((a, b) => (a.score > b.score ? 1 : b.score > a.score ? -1 : 0));
  const set = Array.from(new Set(data.map(obj => obj.finalUrl)));
  const arr = set.map(url => {
    const scores = [];
    data.forEach(obj => {
      if (obj.finalUrl === url) {
        const date = new Date(parseInt(obj.fetchTime, 10));
        const hh = date.getHours();
        let h = hh % 12;
        if (h === 0) h = 12;
        if (h < 10) h = `0${h}`;
        let mm = date.getMinutes();
        if (mm < 10) mm = `0${mm}`;
        const meridian = hh / 12 ? 'PM' : 'AM';
        scores.push({
          time: `${h}:${mm} ${meridian}`,
          score: obj.audits[`${metric}_audits`].score
        });
      }
    });
    return { finalUrl: url, scores };
  });
  // console.log(arr);
  return arr;
};

export default pagesData;
