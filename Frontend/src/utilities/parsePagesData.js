import React from 'react';

const pagesData = (data, metric) => {
  if (!data) return;
  const arr = data.map(obj => {
    return {
      score: obj.audits[`${metric}_audits`].score,
      fetchTime: obj.fetchTime,
      finalUrl: obj.finalUrl
    };
  });
  const set = Array.from(new Set(arr.map(a => a.finalUrl)))
    .map(finalUrl => {
      return arr.find(a => a.finalUrl === finalUrl);
    })
    .sort((a, b) => (a.score > b.score ? 1 : b.score > a.score ? -1 : 0));
  return set;
};

export default pagesData;
