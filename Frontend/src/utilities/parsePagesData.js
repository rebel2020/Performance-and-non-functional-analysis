import React from 'react';

const pagesData = (data, metric) => {
  if (!data) return;
  return data
    .map(obj => {
      return {
        score: obj.audits[`${metric}_audits`].score,
        fetchTime: obj.fetchTime,
        finalUrl: obj.finalUrl
      };
    })
    .sort((a, b) => (a.score > b.score ? 1 : b.score > a.score ? -1 : 0));
};

export default pagesData;
