import React from 'react';

const pagesData = (data, metric) => {
  if (!data) return;
  return data.map(obj => {
    return {
      score: obj.audits[`${metric}_audits`].score,
      fetchTime: obj.fetchTime,
      finalUrl: obj.finalUrl
    };
  });
};

export default pagesData;
